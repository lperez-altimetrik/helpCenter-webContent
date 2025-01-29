import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';

export interface AppState {
    isLoading: boolean;
    user: any;
    language: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = environment.apiBaseUrl + '/content';
    constructor(private http: HttpClient) { }

    private helpCenterState: AppState = {
        isLoading: false,
        user: null,
        language: 'English',
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
            console.log('Stored state:', localStorage);
        })
    }

    restoreState() {
        console.log(localStorage)
        const storedState = localStorage.getItem('helpCenterState');
        console.log('Stored state:', storedState);
        if (storedState) {
            this.state$.next(JSON.parse(storedState));
        }
    }

    /**
     * Simulates an asynchronous call to fetch the JSON contract.
     * Replace the mock data with a real HTTP call in production.
     */
    getSectionList(): Observable<any> {
        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN',
        });
        return this.http.get(`${this.baseUrl}/landing-page`, { headers });

    }

    /**
   * Simulates an asynchronous call to fetch the JSON contract.
   * Replace the mock data with a real HTTP call in production.
   */
    getArticlesTemplate(articleId: any): Observable<any> {

        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN'
        });
        return this.http.get(`${this.baseUrl}/articles/${articleId}`, { headers });

    }

    searchArticles(query: string, category_group: string): Observable<any> {
        const apiUrl = 'http://localhost:8080/api/search/articles';
        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN'
        });
        const params = new HttpParams()
            .set('query', query)
            .set('category_group', category_group);
        return this.http.get(apiUrl, { headers, params });
    }
}