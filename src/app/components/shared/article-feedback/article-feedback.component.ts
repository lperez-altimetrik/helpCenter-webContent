import { Component } from '@angular/core';

@Component({
  selector: 'app-article-feedback',
  standalone: true,
  imports: [],
  templateUrl: './article-feedback.component.html',
  styleUrl: './article-feedback.component.scss'
})
export class ArticleFeedbackComponent {
  public onYesClick = () => {
    alert("On Yes Action triggered");
  }
  public onNoClick = () => {
    alert("On No Action triggered");
  }

}
