import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(even: any) {
    console.log('播放器初始化');
    console.log(even)
  }

}
