import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Import user routing module.
 */
import { UserRoutingModule } from './user-routing/user-routing.module';

/**
 * Import ng-bootstrap module
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Import shared module
 */

import { SharedModule } from '../shared/shared-module.module';

/**
 * UserNavbarComponent and FooterComponent are header and footer in all user pages.
 */
import { UserComponent } from './user.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { FooterComponent } from './footer/footer.component';


/**
 * UserHomeComponent shows list of patients.
 */
import { UserHomeComponent } from './user-home/user-home.component';

/**
 * PatientdetailComponent
 * |
 * + AddBodymeasurementModalComponent
 */
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { AddBodymeasurementModalComponent } from './patientdetail/add-bodymeasurement-modal/add-bodymeasurement-modal.component';
import { AddSpineprescriptionModalComponent } from './patientdetail/add-spineprescription-modal/add-spineprescription-modal.component';
import { AddDiagnosisModalComponent } from './patientdetail/add-diagnosis-modal/add-diagnosis-modal.component';
import { OrderComponent } from './patientdetail/order/order.component';

/**
 * RegisterPatientComponent
 * |
 * +- 1. PatientInfoComponent
 * +- 2. SpinePrescriptionComponent
 * +- 3. CommentComponent
 * +- 4. BodyMeasurementComponent
 * +- 5. CompleteRegisterComponent
 * 
 * CooAnbleCompoent can be inserted between PatientInfo and SpinePrescription in the future.
 * 
 */
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { PatientInfoComponent } from './register-patient/patient-info/patient-info.component';
import { SpinePrescriptionComponent } from './register-patient/spine-prescription/spine-prescription.component';
import { CommentComponent } from './register-patient/comment/comment.component';
import { BodyMeasurementComponent } from './register-patient/body-measurement/body-measurement.component';
import { CompleteRegisterComponent } from './register-patient/complete-register/complete-register.component';
import { CobbAngleComponent } from './cobb-angle/cobb-angle.component';

import { UserInfoComponent } from './user-info/user-info.component';

import { baseURL } from '../shared/models/baseurl';

/**
 * Import services here used only for UserModule
 */

@NgModule({
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    // Routing should be the last
    UserRoutingModule,
  ],
  declarations: [
    UserComponent,
    UserNavbarComponent,
    FooterComponent,
    UserHomeComponent,
    PatientdetailComponent,
    AddBodymeasurementModalComponent,
    AddSpineprescriptionModalComponent,
    AddDiagnosisModalComponent,
    OrderComponent,
    RegisterPatientComponent,
    PatientInfoComponent,
    CobbAngleComponent,
    SpinePrescriptionComponent,
    CommentComponent,
    BodyMeasurementComponent,
    CompleteRegisterComponent,
    UserInfoComponent
  ],
  providers: [
    HttpClientModule,
    { provide: 'BaseURL', useValue: baseURL },
  ]
})
export class UserModule { }
