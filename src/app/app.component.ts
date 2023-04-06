import { Component, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ColorgenService } from './colorgen.service';
import { MatTooltip } from '@angular/material/tooltip';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChildren("tooltip") myTooltip!: QueryList<MatTooltip>
  @HostListener('window:keydown.Space', ['$event'])
  listenSpace(e: KeyboardEvent): void {
      this.getData();
  }
  @HostListener('window:keydown.c', ['$event'])
  listenc(e: KeyboardEvent): void {
      this.copyAll();
  }
  title = 'colorGen';
  public colorData:any;
  constructor(private colorgen:ColorgenService,private clipBoard:Clipboard) { }
  ngOnInit() {
      this.getData()
  }
  getData(){
    
    this.colorgen.getData().then((val:any)=>{
      this.colorData=val
      })      
  }
  copied(index:number,hex:any){
    this.myTooltip['_results'][index].disabled= false;
    this.myTooltip['_results'][index]['_message']=`${hex} copied to cipboard`
  this.myTooltip['_results'][index].show();
  this.myTooltip['_results'][index]['_message']='Copy!'
  }
  copyAll(){

    this.clipBoard.copy(this.colorData.toString())
  }
}


