import { Component } from '@angular/core';
import {TestServiceService} from "../../services/test-service.service";
import {HttpClientModule} from "@angular/common/http";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-test-component',
  imports: [HttpClientModule],
  standalone: true,
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  user = new User();


  constructor(private testService: TestServiceService) {
  }

  onTest() {
    this.testService.testConnection().subscribe(res => console.log(res));
  }

  onTest2() {
    this.testService.testConnection2().subscribe(res => console.log(res));
  }

  onTest3() {
    this.user.login = "yo2";
    this.user.password = "yo";
    this.testService.testConnection3(this.user).subscribe(res => console.log(res));
  }
}
