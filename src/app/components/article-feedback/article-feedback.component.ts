import { Component } from '@angular/core';

@Component({
  selector: 'app-article-feedback',
  standalone: true,
  imports: [],
  templateUrl: './article-feedback.component.html',
  styleUrl: './article-feedback.component.scss'
})
export class ArticleFeedbackComponent {
  public articleTitle: string = "Article Feedback";
  public articleSubtitle: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  public platforms: any[] = ["Mobile", "Desktop"];
}
