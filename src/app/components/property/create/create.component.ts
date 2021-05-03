import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Router } from '@angular/router';

import { Property } from '../../../models/property.model';
import { PropertysService } from 'src/app/services/propertys.service';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PropertyCreateComponent implements OnInit {
  user_id: string = '';

  property: Property = {
    title: '',
    address: '',
    city: '',
    description: '',
    state: '',
    price: '',
    user_id: this.user_id
  }

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertysService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [ Validators.required]],
      address: [null, [Validators.required]],
      city: [null, [Validators.required]],
      description: [null, [Validators.required]],
      state: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });

    const token = this.authService.get()
    const decodedToken = this.tokenService.payload(token);

    const userId = decodedToken.sub;
    this.user_id = userId;
  }

  create() {
    this.property.user_id = this.user_id;
    this.propertyService.create(this.property).subscribe(() => {
      this.router.navigate(['/propertys']);
    });
  }

  cancel(): void {
    this.router.navigate(['/propertys'])
  }
}
