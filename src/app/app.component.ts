import {Component, Input, OnInit, OnDestroy, Output, ElementRef} from '@angular/core';
import {VideoService} from './services/video.service';
import {Video} from './models/video';
import {Subscription} from 'rxjs';
import {Resource} from './models/resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RedBullVideoPlatform';
  @Input() currentVideos: Video[] = [];
  @Input() selectedVideo: Resource = null;
  @Output() searchValue: string = null;
  @Output() showImagesCount = 9;
  currentBatchStart = 0;
  private subscriptions: Subscription[] = [];

  constructor(private videoService: VideoService, private elRef: ElementRef) {
  }


  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private init(): void {
    this.subscribeToVideos();
  }

  private subscribeToVideos(): void {
    this.subscriptions.push(
      this.videoService.getVideos(null, this.showImagesCount).subscribe((videos: any) => {
        this.currentVideos = videos.items;
      })
    );
  }

  private getPreviewImage(video: Video): string {
    if (video.resources.filter(resource => resource.type === 'reference_keyframe')?.length > 0) {
      // return video.resources.filter(resource => resource.type === 'reference_keyframe')[0].url;
      return video.resources.filter(resource => resource.type === 'reference_keyframe')[0].url?.replace('/im/', '/im:i:w_600/');
    } else {
      return '../assets/redbulllogo.png';
    }

  }

  public previousBatch(): void {
    this.currentBatchStart = this.currentBatchStart - this.showImagesCount;
    if (this.currentBatchStart < 0) {
      this.currentBatchStart = 0;
    }
    this.videoService.getVideos(this.currentBatchStart, this.showImagesCount, this.searchValue).subscribe((videos: any) => {
      this.currentVideos = videos.items;
    });
  }

  public nextBatch(): void {
    this.currentBatchStart = this.currentBatchStart + this.showImagesCount;
    this.videoService.getVideos(this.currentBatchStart, this.showImagesCount, this.searchValue).subscribe((videos: any) => {
      this.currentVideos = videos.items;
    });
  }

  private onClick(video: Video): void {
    const videos = video.resources.filter(resource => resource.type === 'proxy_normal' || resource.type === 'proxy_hd_720');
    this.selectedVideo = videos[0];
    const player = this.elRef.nativeElement.querySelector('video');
    if (player) {
      player.load();
    }
  }

  public hideVideo(): void {
    this.selectedVideo = null;
    const player = this.elRef.nativeElement.querySelector('video');
    if (player) {
      player.hide();
    }
  }

  public searchVideos(): void {
    this.videoService.getVideos(null, this.showImagesCount, this.searchValue).subscribe((videos: any) => {
      this.currentVideos = videos.items;
    });
  }

  public clearSearch(): void {
    this.searchValue = null;
    this.videoService.getVideos(null, this.showImagesCount, this.searchValue).subscribe((videos: any) => {
      this.currentVideos = videos.items;
    });
  }
}
