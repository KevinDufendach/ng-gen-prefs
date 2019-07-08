import {Component, Input, OnInit} from '@angular/core';
import {Organ} from '../conditions/condition';

@Component({
  selector: 'app-organ-icon',
  templateUrl: './organ-icon.component.html',
  styleUrls: ['./organ-icon.component.scss']
})
export class OrganIconComponent implements OnInit {
  @Input()
  organList: Organ[];

  fileMaps = {
    ADRENAL: 'kidneys.png',
    VESSEL: 'vessel.png',
    JOINT: 'joint.png',
    BONE: 'bone.png',
    BRAIN: 'brain.png',
    NERVE: 'nerves.png',
    CANCER: 'cancer.png',
    GI: 'gi_tract.png',
    COLON: 'colon.png',
    EYE: 'eye.png',
    HEART: 'heart.png',
    KIDNEY: 'kidneys.png',
    IMMUNE: 'immune.png',
    PAIN: 'nerves.png',
    PANCREAS: 'pancreas.png',
    LUNG: 'lungs.png',
    LIVER: 'liver.png',
    MUSCLE: 'muscle.png',
    STOMACH: 'gi_tract.png',
    TUMOR: 'cancer.png',
    MEDICINE: 'medicines.png',
    VASDEFERENS: 'scrotum.png',
    METABOLIC: 'muscle.png',
    MULTIPLE: 'person.png'
  };

  imgUri = new Array<string>();

  constructor() { }

  ngOnInit() {
    for (const o of this.organList) {
      this.imgUri.push('../../assets/img/' + this.fileMaps[o.toString()]);
    }
    console.log(this.imgUri);
  }

}
