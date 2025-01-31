import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';

export interface AppState {
    categoryGroup: string;
    user: any;
    language: string;
    categoryGroups: string[];
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = environment.apiBaseUrl + '/content';
    constructor(private http: HttpClient) { }

    private helpCenterState: AppState = {
        categoryGroup: "Small Business",
        user: null,
        language: 'English',
        categoryGroups: ["Small Business", "Enterprise", "Partners"]
    };

    private state$ = new BehaviorSubject<AppState>(this.helpCenterState);

    getState(): Observable<AppState> {
        return this.state$.asObservable();
    }

    get currentState(): AppState {
        return this.state$.getValue();
    }

    updateState(newState: Partial<AppState>): void {
        this.state$.next({ ...this.currentState, ...newState });
        this.getState().subscribe((state: AppState) => {
            localStorage.setItem('helpCenterState', JSON.stringify(state));
        })
    }

    restoreState() {
        const storedState = localStorage.getItem('helpCenterState');
        if (storedState) {
            this.state$.next(JSON.parse(storedState));
        }
    }

    /**
     * Simulates an asynchronous call to fetch the JSON contract.
     * Replace the mock data with a real HTTP call in production.
     */
    getSectionList(language: string, category_group: string): Observable<any> {
        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN',
        });
        const params = new HttpParams()
            .set('lng', language)
            .set('cat_group', category_group)
        return this.http.get(`${this.baseUrl}/landing-page`, { headers, params });

    }

    /**
   * Simulates an asynchronous call to fetch the JSON contract.
   * Replace the mock data with a real HTTP call in production.
   */
    getArticlesTemplate(articleId: any, language: string, category_group: string): Observable<any> {

        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN'
        });
        const params = new HttpParams()
            .set('lng', language)
            .set('cat_group', category_group)
        return this.http.get(`${this.baseUrl}/articles/${articleId}`, { headers, params });

    }

    searchArticles(query: string, category_group: string): Observable<any> {
        const apiUrl = 'http://localhost:8080/api/search/articles';
        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN'
        });
        const params = new HttpParams()
            .set('query', query)
            .set('category_group', category_group)
            .set('lng', this.state$.getValue().language)
        return this.http.get(apiUrl, { headers, params });
    }
}