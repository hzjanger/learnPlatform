import {Component, Input, OnInit} from '@angular/core';
import {VgAPI, VgMedia} from 'videogular2/core';
import {IMediaSubscriptions, IPlayable} from 'videogular2/src/core/vg-media/i-playable';
export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, IPlayable {
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

  playlist: Array<IMedia> = [
    {
      title: 'Pale Blue Dot',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];



  api:VgAPI;
  //设置图标箭头
  arrow: string = 'arrow_back';

  showFiller = false;

  constructor() { }

  ngOnInit() {
  }



  myPlayVideo(myMedia: VgMedia) {
    myMedia.play();
    console.log(123)
    return false;
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    console.log(this.api);
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        // Set the video to the beginning
        this.api.getDefaultMedia().play();
      }
    );

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
