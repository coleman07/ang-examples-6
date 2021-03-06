import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styles: []
})
export class VideoPlayerComponent implements OnInit {
  private youtubeUrlPrefix = '//www.youtube.com/embed/'; 

  @Input() videos : Array<string>;
  safeVideoUrls : Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  ngOnChanges() { 
    this.safeVideoUrls = this.videos ? 
        this.videos 
            .map(v => this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + v)) 
    : this.videos; 
  } 
}
