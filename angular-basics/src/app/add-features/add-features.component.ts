import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-features',
  templateUrl: './add-features.component.html',
  styleUrls: ['./add-features.component.scss']
})
export class AddFeaturesComponent implements OnInit {

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;
  constructor(private resover: ComponentFactoryResolver,
              private title: Title,
              private meta: Meta) {
    title.setTitle('Add Features');
    this.meta.addTags([
      {name: 'keywords', content: 'Angular, google'},
      {name: 'description', content: 'this is features'}
    ]);
  }

  ngOnInit() {
  }

  showModal() {
    const modalFactory = this.resover.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear()
    const modalComp = this.refDir.containerRef.createComponent(modalFactory);
    modalComp.instance.title = 'Din Title';
    modalComp.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}
