import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { FlightCrudModel } from './flight-crud.model';

@Component({
  selector: 'app-flight-crud',
  templateUrl: './flight-crud.component.html',
  styleUrls: ['./flight-crud.component.scss']
})
export class FlightCrudComponent implements OnInit{
  
  formValue !: FormGroup;
  flightCrudModelObj : FlightCrudModel = new FlightCrudModel();
  flightData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder : FormBuilder, private api : ApiService){
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id : [''],
      polazak : [''],
      dolazak : [''],
      vremePoletanja : ['']
    })
    this.getAllFlights();
  }

  clickAddFlight(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postFlightDetails(){
    this.flightCrudModelObj.polazak = this.formValue.value.polazak;
    this.flightCrudModelObj.dolazak = this.formValue.value.dolazak;
    this.flightCrudModelObj.vremePoletanja = this.formValue.value.vremePoletanja;

    this.api.postFlight(this.flightCrudModelObj).subscribe(res=>{
      console.log(res);
      alert("Flight added successfuly");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllFlights();
    },
    err=>{
      alert("Something went wrong");
    }
    )
  }

  getAllFlights(){
    this.api.getFlight().subscribe(res=>{
      this.flightData = res;
    })
  }

  deleteFlight(row : any){
    this.api.deleteFlight(row.id).subscribe(res=>{
      alert("Flight deleted");
      this.getAllFlights();
    })
  }

  onEdit(row: any){
    this.flightCrudModelObj.id = row.id;
    this.formValue.controls['polazak'].setValue(row.polazak);
    this.formValue.controls['dolazak'].setValue(row.dolazak);
    this.formValue.controls['vremePoletanja'].setValue(row.vremePoletanja);
    this.showAdd = false;
    this.showUpdate = true;
  }

  updateFlightDetails(){
    this.flightCrudModelObj.polazak = this.formValue.value.polazak;
    this.flightCrudModelObj.dolazak = this.formValue.value.dolazak;
    this.flightCrudModelObj.vremePoletanja = this.formValue.value.vremePoletanja;
    this.api.updateFlight(this.flightCrudModelObj, this.flightCrudModelObj.id).subscribe(res=>{
      alert("Updated successfuly");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllFlights();
    })
  }

}
