import {Component, Inject, OnInit} from '@angular/core';
import { Problem } from '../../models/problem.model';
import { PROBLEMS } from '../../mock-problems';

import { Subscription } from 'rxjs/Subscription';
 
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[] = PROBLEMS;
  subscriptionProblmem = Subscription;
  constructor(@Inject('data') private data) { }

  ngOnInit() {
    // this.problems=PROBLEMS;
    this.getProblems();
  }

  getProblems() {
    //this.problems = this.dataService.getProblems();
    this.subscriptionProblmem = this.data.getProblems()
    .subscribe(problems => this.problems = problems);
  }

}
