import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PatientInfoForm, SpinePrescriptionForm, DiagnosisForm, BodyMeasurementForm } from '../../../shared/register-form-interfaces';
import { Patient } from '../../../shared/patient';

import { RegisterPatientService } from '../service/register-patient.service';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.scss']
})
export class CompleteRegisterComponent implements OnInit {

  @Input() patientInfo: PatientInfoForm;
  @Input() spinePrescription: SpinePrescriptionForm;
  @Input() diagnosis: DiagnosisForm;
  @Input() bodyMeasurement: BodyMeasurementForm;

  showResult: boolean;
  patient: Patient;

  constructor(
    private router: Router,
    private location: Location,
    private registerPatientService: RegisterPatientService,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.showResult = false;
  }

  goPrevious() {
    this.registerPatientService.setPageNum(4);
  }

  registerPatient() {
    console.log('Submit Patient');

    var patient: any = {};

    patient.hashKey = this.patientInfo.hashKey;
    patient.lastname = this.patientInfo.lastname;
    patient.birthday = this.patientInfo.birthday;
    patient.sex = this.patientInfo.sex;

    if (this.spinePrescription.valid) {
      var spineInfo: any = {};
      var type = this.spinePrescription.curveType + this.spinePrescription.lumbarSpine + this.spinePrescription.sagittalAlignment;
      console.log(type);

      spineInfo.type = type;
      spineInfo.risser = +this.spinePrescription.risser;

      spineInfo.curveStart1 = this.spinePrescription.curveStart1;
      spineInfo.cobbAng1 = +this.spinePrescription.cobbAng1;
      spineInfo.curveEnd1 = this.spinePrescription.curveEnd1;
      spineInfo.direction1 = this.spinePrescription.direction1;
      spineInfo.major1 = (this.spinePrescription.major1 === 'y') ? true : false;

      if (this.spinePrescription.addCurve2) {
        spineInfo.curveStart2 = this.spinePrescription.curveStart2;
        spineInfo.cobbAng2 = +this.spinePrescription.cobbAng2;
        spineInfo.curveEnd2 = this.spinePrescription.curveEnd2;
        spineInfo.direction2 = this.spinePrescription.direction2;
        spineInfo.major2 = (this.spinePrescription.major2 === 'y') ? true : false;
      }

      if (this.spinePrescription.addCurve3) {
        spineInfo.curveStart3 = this.spinePrescription.curveStart3;
        spineInfo.cobbAng3 = +this.spinePrescription.cobbAng3;
        spineInfo.curveEnd3 = this.spinePrescription.curveEnd3;
        spineInfo.direction3 = this.spinePrescription.direction3;
        spineInfo.major3 = (this.spinePrescription.major3 === 'y') ? true : false; 
      }

      patient.spineInfos = [spineInfo];
    }

    if (this.diagnosis.valid) {
      var comment: any = {};
      comment.comment = this.diagnosis.comment
      patient.comments = [comment];
    }
    
    if (this.bodyMeasurement.valid) {
      var bodyMeasurement: any = {};
      bodyMeasurement.height = +this.bodyMeasurement.height;
      bodyMeasurement.weight = +this.bodyMeasurement.weight;
      bodyMeasurement.bust = +this.bodyMeasurement.bust;
      bodyMeasurement.waist = +this.bodyMeasurement.waist;
      bodyMeasurement.shoulder = +this.bodyMeasurement.shoulder;
      bodyMeasurement.hip = +this.bodyMeasurement.hip;
      patient.bodyMeasurements = [bodyMeasurement];
    }
    

    this.patientService.postPatient(patient)
    .subscribe((patient) => {
      console.log('Patient saved');
      console.log(patient);
      this.patient = patient;
      this.showResult = true;
      setTimeout(() => {
        this.showResult = false;
        
        // window.location.reload();
        this.router.navigate(['/home']);
      }, 5000);
    })

  }
}
