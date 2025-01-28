import { Injectable } from '@angular/core';
import * as watsonChat from 'paysafe-ss-chatbot-lib-fe/module/virtual-assistant';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatbotVisibilityType } from '../models/chatbot-visibility-type';
import { WS_CHATBOT_CONFIG } from './config';


export interface ChatbotConfig {
  host: string;
  serviceInstanceId: string;
  integrationId: string;
}

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {
  private visibility$ = new BehaviorSubject<ChatbotVisibilityType>(this.checkOnLoadVisibility());
  botConfig: any;
  botConfigBundle: any;
  private CSS_CLASS = 'custom-chatbot-launcher';
  private chatbotCSSClasses: Array<string> = [this.CSS_CLASS];


  visibility(): Observable<ChatbotVisibilityType> {
    return this.visibility$.asObservable();
  }

  get chatbotLauncherCSSClasses(): Array<string> {
    return this.chatbotCSSClasses;
  }

  setChatbotLauncherCSSClass(cssClass: string): void {
    if (!this.chatbotCSSClasses.includes(cssClass)) {
      this.chatbotCSSClasses.push(cssClass);
    }
  }

  get chatbotLauncherCSSClass(): string {
    return this.CSS_CLASS;
  }

  enableVisibilityIfNeeded(): void {
    if (this.visibility$.value === ChatbotVisibilityType.HIDDEN) {
      this.changeVisibility(ChatbotVisibilityType.VISIBLE);
    }
  }

  changeVisibility(visibility: ChatbotVisibilityType): void {
    this.visibility$.next(visibility);
  }

  private checkOnLoadVisibility(): ChatbotVisibilityType {
    // if (this.contextService.get('lang') != 'fr') {
    this.initChatbot(location.pathname);
    return ChatbotVisibilityType.VISIBLE;
    // } else {
    //     return ChatbotVisibilityType.HIDDEN;
    // }
  }

  private initChatbot(path: string): void {
    const pathHandler = ['neteller', 'skrill', 'portal', 'business-wallet'].find(item => path.includes(item)) || 'login-app';
    this.botConfigBundle = WS_CHATBOT_CONFIG[pathHandler];
    this.botConfig = this.botConfigBundle[location.hostname];
    watsonChat.chatHelper.setConfig({
      host: this.botConfig.host,
      isAuthFlow: false,
      language: 'en',
      watsonVersion: '6.2.0',
      integrationId: this.botConfig.integrationId,
      serviceInstanceId: this.botConfig.service,
      brand: 'UNITY',
      cssVariables: { 'LAUNCHER-position-bottom': '60px' },
      showLauncher: true
    });
    watsonChat.loadChat();
  }
}