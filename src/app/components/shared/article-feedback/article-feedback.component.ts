import { Component } from '@angular/core';

@Component({
  selector: 'app-article-feedback',
  standalone: true,
  imports: [],
  templateUrl: './article-feedback.component.html',
  styleUrl: './article-feedback.component.scss'
})
export class ArticleFeedbackComponent {
  public feedbackResponse: string = "None";
  private messages: any = {
    askMessage: "Was this article helpful?",
    thanksMessage: "Thanks for your feedback",
    requestingMessage: "Help us improve?"
  };
  public textAreaPlaceholder: string =  "leave your comment";

  
  public currentMessage: string = this.messages.askMessage;
  public onYesClick = () => {
    this.feedbackResponse = "";
    this.currentMessage = this.messages.thanksMessage;
  }
  public onNoClick = () => {
    this.feedbackResponse = "No"
    this.currentMessage = this.messages.requestingMessage;
  }

  public sendFeedbackClick = () => {
    //looks like duplicated method but this will call an API here
    this.feedbackResponse = "";
    this.currentMessage = this.messages.thanksMessage;
  }
  
  public noFeedbackClick = () => {
    this.feedbackResponse = "";
    this.currentMessage = this.messages.thanksMessage;
  }

}
