import { Component, OnInit } from '@angular/core';
import {VgAPI, VgMedia} from 'videogular2/core';
import {IMediaSubscriptions, IPlayable} from 'videogular2/src/core/vg-media/i-playable';

@Component({
  selector: 'app-video-test',
  templateUrl: './video-test.component.html',
  styleUrls: ['./video-test.component.scss']
})
export class VideoTestComponent implements OnInit {
  addTextTrack: Function;
  buffer: any;
  canPlay: boolean;
  canPlayThrough: boolean;
  currentTime: number;
  dispatchEvent: Function;
  duration: number;
  elem: any;
  id: string;
  isCompleted: boolean;
  isLive: boolean;
  isMetadataLoaded: boolean;
  isWaiting: boolean;
  pause: Function;
  play: Function;
  state: string;
  subscriptions: IMediaSubscriptions;
  textTracks: TextTrackList;
  time: any;
  track: any;

  videoUrl = 'http://static.videogular.com/assets/videos/videogular.mp4';



  //设置图标箭头
  arrow: string = 'arrow_back';

  constructor() {

  }

  ngOnInit() {
  }

  //显示播放列表
  showMenu(drawer: any) {
    drawer.toggle()
    if (this.arrow == 'arrow_back') {
      this.arrow = 'arrow_forward';
    } else {
      this.arrow = 'arrow_back';
    }
  }

}
