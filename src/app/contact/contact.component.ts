import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor (private fb: FormBuilder, private contactService: ContactService) {
    // To initialize FormGroup
    this.form = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'phoneNumber': [null, Validators.compose([Validators.required, Validators.pattern('([0-9]{2} ){4}[0-9]{2}')])],
      'shouldAddToNewsletter': [null]
    });
  }

  ngOnInit () {}

  onSubmit (): void {
    console.log(this.form);

    // mark all as touched
    Object.keys(this.form.controls).forEach(
      (control) => this.form.controls[control].markAsTouched()
    );

    if (this.form.valid) {
      console.log(this.form.value);
      this.contactService.AddContact(this.form.value).pipe(take(1)).subscribe(
        (response) => {
          alert('Success');
          this.onReset();
        }
      );
    }
  }

  onReset () {
    this.form.reset();
  }


}
