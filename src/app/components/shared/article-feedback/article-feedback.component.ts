import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-feedback',
  standalone: true,
  imports: [],
  templateUrl: './article-feedback.component.html',
  styleUrl: './article-feedback.component.scss',
})
export class ArticleFeedbackComponent {
  @Input() feedbackResponse: string = 'None';
  @Input() askMessage = 'Was this article helpful?';
  @Input() thanksMessage = 'Thanks for your feedback';
  @Input() requestingMessage = 'Help us improve';

  @Input() textAreaPlaceholder: string = 'leave your comment';

  public currentMessage: string = this.askMessage;
  public onYesClick = () => {
    this.feedbackResponse = '';
    this.currentMessage = this.thanksMessage;
  };
  public onNoClick = () => {
    this.feedbackResponse = 'No';
    this.currentMessage = this.requestingMessage;
  };

  public sendFeedbackClick = () => {
    //looks like duplicated method but this will call an API here
    this.feedbackResponse = '';
    this.currentMessage = this.thanksMessage;
  };

  public noFeedbackClick = () => {
    this.feedbackResponse = '';
    this.currentMessage = this.thanksMessage;
  };
}
