import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'http://localhost:8080/api/content';
    constructor(private http: HttpClient) { }

    /**
     * Simulates an asynchronous call to fetch the JSON contract.
     * Replace the mock data with a real HTTP call in production.
     */
    getSectionList(): Observable<any> {
        const headers = new HttpHeaders({
            'User-Roles': 'ADMIN',
        });
        return this.http.get(`${this.baseUrl}/landing-page`, { headers });

        const mockJsonContract =
        {
            "template": {
                "data": {
                    "id": 1,
                    "attributes": {
                        "createdAt": "2025-01-07T08:35:37.351Z",
                        "updatedAt": "2025-01-07T08:44:27.534Z",
                        "publishedAt": "2025-01-07T08:35:38.567Z",
                        "locale": "en",
                        "page_template": {
                            "data": null
                        },
                        "search_area": [
                            {
                                "id": 1,
                                "__component": "shared.title",
                                "title": "Need Help? Let's find it together!"
                            },
                            {
                                "id": 1,
                                "__component": "category.category-group-selector",
                                "category_groups": {
                                    "data": [
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "Enterprise",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:09:49.545Z",
                                                "updatedAt": "2025-01-07T07:10:20.425Z",
                                                "publishedAt": "2025-01-07T07:09:50.473Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Small Business",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:09:27.975Z",
                                                "updatedAt": "2025-01-07T07:10:33.570Z",
                                                "publishedAt": "2025-01-07T07:09:28.779Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Partners",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:10:09.889Z",
                                                "updatedAt": "2025-01-07T07:10:10.883Z",
                                                "publishedAt": "2025-01-07T07:10:10.881Z",
                                                "locale": "en"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "__component": "shared.search-bar",
                                "search_api": "/search?topic={topic}",
                                "topics": {
                                    "data": [
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Getting Started",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                                "createdAt": "2025-01-07T07:23:46.633Z",
                                                "updatedAt": "2025-01-07T07:24:23.903Z",
                                                "publishedAt": "2025-01-07T07:24:23.901Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "My account",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                                "createdAt": "2025-01-07T07:29:06.074Z",
                                                "updatedAt": "2025-01-07T07:29:07.904Z",
                                                "publishedAt": "2025-01-07T07:29:07.902Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 4,
                                            "attributes": {
                                                "title": "Analytics",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T07:30:59.897Z",
                                                "updatedAt": "2025-01-07T07:31:00.700Z",
                                                "publishedAt": "2025-01-07T07:31:00.698Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Disputes",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                                "createdAt": "2025-01-07T07:30:02.498Z",
                                                "updatedAt": "2025-01-07T07:30:04.916Z",
                                                "publishedAt": "2025-01-07T07:30:04.913Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        "section_list": [
                            {
                                "id": 4,
                                "title": "News & Updates",
                                "section_size": "full",
                                "display_component": "card_carousel",
                                "max_display_items": 5,
                                "topics": false,
                                "icon": {
                                    "data": {
                                        "id": 14,
                                        "attributes": {
                                            "name": "newspaper.svg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 22,
                                            "height": 22,
                                            "formats": null,
                                            "hash": "newspaper_3c3e1fdfb3",
                                            "ext": ".svg",
                                            "mime": "image/svg+xml",
                                            "size": 0.97,
                                            "url": "/uploads/newspaper_3c3e1fdfb3.svg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2025-01-07T07:15:04.763Z",
                                            "updatedAt": "2025-01-07T07:15:57.408Z"
                                        }
                                    }
                                },
                                "category": {
                                    "data": {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                }
                            },
                            {
                                "id": 5,
                                "title": "Products",
                                "section_size": "full",
                                "display_component": "card_carousel",
                                "max_display_items": 3,
                                "topics": false,
                                "icon": {
                                    "data": {
                                        "id": 15,
                                        "attributes": {
                                            "name": "category.svg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 22,
                                            "height": 22,
                                            "formats": null,
                                            "hash": "category_a8d318040a",
                                            "ext": ".svg",
                                            "mime": "image/svg+xml",
                                            "size": 1.36,
                                            "url": "/uploads/category_a8d318040a.svg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2025-01-07T07:17:23.549Z",
                                            "updatedAt": "2025-01-07T07:17:23.549Z"
                                        }
                                    }
                                },
                                "category": {
                                    "data": {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                }
                            },
                            {
                                "id": 6,
                                "title": "Topics",
                                "section_size": "full",
                                "display_component": "card_carousel",
                                "max_display_items": 5,
                                "topics": true,
                                "icon": {
                                    "data": {
                                        "id": 23,
                                        "attributes": {
                                            "name": "subject.svg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 22,
                                            "height": 22,
                                            "formats": null,
                                            "hash": "subject_baeb56d1a2",
                                            "ext": ".svg",
                                            "mime": "image/svg+xml",
                                            "size": 0.58,
                                            "url": "/uploads/subject_baeb56d1a2.svg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2025-01-07T08:34:08.218Z",
                                            "updatedAt": "2025-01-07T08:34:08.218Z"
                                        }
                                    }
                                },
                                "category": {
                                    "data": null
                                }
                            },
                            {
                                "id": 7,
                                "title": "Trending Articles",
                                "section_size": "half",
                                "display_component": "list",
                                "max_display_items": 5,
                                "topics": false,
                                "icon": {
                                    "data": {
                                        "id": 16,
                                        "attributes": {
                                            "name": "arrow_outward.svg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 22,
                                            "height": 22,
                                            "formats": null,
                                            "hash": "arrow_outward_220bc7bc73",
                                            "ext": ".svg",
                                            "mime": "image/svg+xml",
                                            "size": 0.5,
                                            "url": "/uploads/arrow_outward_220bc7bc73.svg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2025-01-07T07:19:41.719Z",
                                            "updatedAt": "2025-01-07T07:19:41.719Z"
                                        }
                                    }
                                },
                                "category": {
                                    "data": {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                }
                            },
                            {
                                "id": 8,
                                "title": "FAQs",
                                "section_size": "half",
                                "display_component": "list",
                                "max_display_items": 5,
                                "topics": false,
                                "icon": {
                                    "data": {
                                        "id": 17,
                                        "attributes": {
                                            "name": "question_mark.svg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 22,
                                            "height": 22,
                                            "formats": null,
                                            "hash": "question_mark_1c80802bfa",
                                            "ext": ".svg",
                                            "mime": "image/svg+xml",
                                            "size": 1.55,
                                            "url": "/uploads/question_mark_1c80802bfa.svg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2025-01-07T07:22:26.688Z",
                                            "updatedAt": "2025-01-07T07:22:26.688Z"
                                        }
                                    }
                                },
                                "category": {
                                    "data": {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                "meta": {}
            },
            "topics": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "Getting Started",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                            "createdAt": "2025-01-07T07:23:46.633Z",
                            "updatedAt": "2025-01-07T07:24:23.903Z",
                            "publishedAt": "2025-01-07T07:24:23.901Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 18,
                                    "attributes": {
                                        "name": "arrow_up.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "arrow_up_4dad42cf3a",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.52,
                                        "url": "/uploads/arrow_up_4dad42cf3a.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:24:15.312Z",
                                        "updatedAt": "2025-01-07T07:24:15.312Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 2,
                        "attributes": {
                            "title": "My account",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                            "createdAt": "2025-01-07T07:29:06.074Z",
                            "updatedAt": "2025-01-07T07:29:07.904Z",
                            "publishedAt": "2025-01-07T07:29:07.902Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 19,
                                    "attributes": {
                                        "name": "person.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "person_11557bc7fb",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 2.01,
                                        "url": "/uploads/person_11557bc7fb.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:28:55.161Z",
                                        "updatedAt": "2025-01-07T07:28:55.161Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Disputes",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                            "createdAt": "2025-01-07T07:30:02.498Z",
                            "updatedAt": "2025-01-07T07:30:04.916Z",
                            "publishedAt": "2025-01-07T07:30:04.913Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 20,
                                    "attributes": {
                                        "name": "refund.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "refund_c0915b3dbd",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 1.24,
                                        "url": "/uploads/refund_c0915b3dbd.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:29:56.511Z",
                                        "updatedAt": "2025-01-07T07:29:56.511Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": []
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 4,
                        "attributes": {
                            "title": "Analytics",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                            "createdAt": "2025-01-07T07:30:59.897Z",
                            "updatedAt": "2025-01-07T07:31:00.700Z",
                            "publishedAt": "2025-01-07T07:31:00.698Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 21,
                                    "attributes": {
                                        "name": "trending_up.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "trending_up_576089c40d",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.54,
                                        "url": "/uploads/trending_up_576089c40d.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:30:53.495Z",
                                        "updatedAt": "2025-01-07T07:30:53.495Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 5,
                        "attributes": {
                            "title": "Transactions",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                            "createdAt": "2025-01-07T07:31:55.601Z",
                            "updatedAt": "2025-01-07T07:32:03.944Z",
                            "publishedAt": "2025-01-07T07:32:03.943Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 22,
                                    "attributes": {
                                        "name": "compare_arrows.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "compare_arrows_47bff63c69",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.66,
                                        "url": "/uploads/compare_arrows_47bff63c69.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:31:52.615Z",
                                        "updatedAt": "2025-01-07T07:31:52.615Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": []
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 5,
                        "attributes": {
                            "title": "Example",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                            "createdAt": "2025-01-07T07:31:55.601Z",
                            "updatedAt": "2025-01-07T07:32:03.944Z",
                            "publishedAt": "2025-01-07T07:32:03.943Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 22,
                                    "attributes": {
                                        "name": "compare_arrows.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "compare_arrows_47bff63c69",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.66,
                                        "url": "/uploads/compare_arrows_47bff63c69.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:31:52.615Z",
                                        "updatedAt": "2025-01-07T07:31:52.615Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": []
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 5,
                        "attributes": {
                            "title": "Other",
                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                            "createdAt": "2025-01-07T07:31:55.601Z",
                            "updatedAt": "2025-01-07T07:32:03.944Z",
                            "publishedAt": "2025-01-07T07:32:03.943Z",
                            "searchable": true,
                            "locale": "en",
                            "description": null,
                            "icon": {
                                "data": {
                                    "id": 22,
                                    "attributes": {
                                        "name": "compare_arrows.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 16,
                                        "height": 16,
                                        "formats": null,
                                        "hash": "compare_arrows_47bff63c69",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.66,
                                        "url": "/uploads/compare_arrows_47bff63c69.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:31:52.615Z",
                                        "updatedAt": "2025-01-07T07:31:52.615Z"
                                    }
                                }
                            },
                            "articles": {
                                "data": []
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    }
                ],
                "meta": {
                    "pagination": {
                        "page": 1,
                        "pageSize": 25,
                        "pageCount": 1,
                        "total": 5
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 6,
                        "attributes": {
                            "slug": "news-updates",
                            "description": null,
                            "createdAt": "2025-01-07T07:16:22.380Z",
                            "updatedAt": "2025-01-07T07:38:29.493Z",
                            "short_description": "News & Updates",
                            "title": "News & Updates",
                            "publishedAt": "2025-01-07T07:21:05.768Z",
                            "locale": "en",
                            "root_category": true,
                            "articles": {
                                "data": [
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "title": "New Optic App",
                                            "createdAt": "2025-01-16T19:01:50.873Z",
                                            "updatedAt": "2025-01-16T19:02:39.400Z",
                                            "publishedAt": "2025-01-16T19:02:39.398Z",
                                            "subtitle": "New Optic App",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "title": "Payments API",
                                            "createdAt": "2025-01-16T19:01:50.873Z",
                                            "updatedAt": "2025-01-16T19:02:39.400Z",
                                            "publishedAt": "2025-01-16T19:02:39.398Z",
                                            "subtitle": "Payments API",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    },
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Embedded Wallets",
                                            "createdAt": "2025-01-16T19:01:50.873Z",
                                            "updatedAt": "2025-01-16T19:02:39.400Z",
                                            "publishedAt": "2025-01-16T19:02:39.398Z",
                                            "subtitle": "Embedded Wallets",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    },
                                    {
                                        "id": 5,
                                        "attributes": {
                                            "title": "Paysafe Checkout",
                                            "createdAt": "2025-01-16T19:01:50.873Z",
                                            "updatedAt": "2025-01-16T19:02:39.400Z",
                                            "publishedAt": "2025-01-16T19:02:39.398Z",
                                            "subtitle": "Paysafe Checkout",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    },
                                    {
                                        "id": 4,
                                        "attributes": {
                                            "title": "Other Products",
                                            "createdAt": "2025-01-16T19:01:50.873Z",
                                            "updatedAt": "2025-01-16T19:02:39.400Z",
                                            "publishedAt": "2025-01-16T19:02:39.398Z",
                                            "subtitle": "Other Products",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "More data",
                                            "createdAt": "2025-01-16T19:01:50.873Z",
                                            "updatedAt": "2025-01-16T19:02:39.400Z",
                                            "publishedAt": "2025-01-16T19:02:39.398Z",
                                            "subtitle": "More data",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "icon": {
                                "data": {
                                    "id": 14,
                                    "attributes": {
                                        "name": "newspaper.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 22,
                                        "height": 22,
                                        "formats": null,
                                        "hash": "newspaper_3c3e1fdfb3",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.97,
                                        "url": "/uploads/newspaper_3c3e1fdfb3.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:15:04.763Z",
                                        "updatedAt": "2025-01-07T07:15:57.408Z"
                                    }
                                }
                            },
                            "sub_categories": {
                                "data": []
                            },
                            "category_groups": {
                                "data": [
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Enterprise",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:49.545Z",
                                            "updatedAt": "2025-01-07T07:10:20.425Z",
                                            "publishedAt": "2025-01-07T07:09:50.473Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Partners",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:10:09.889Z",
                                            "updatedAt": "2025-01-07T07:10:10.883Z",
                                            "publishedAt": "2025-01-07T07:10:10.881Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Small Business",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:27.975Z",
                                            "updatedAt": "2025-01-07T07:10:33.570Z",
                                            "publishedAt": "2025-01-07T07:09:28.779Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "products": {
                                "data": []
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 7,
                        "attributes": {
                            "slug": "products",
                            "description": null,
                            "createdAt": "2025-01-07T07:16:56.996Z",
                            "updatedAt": "2025-01-07T07:38:35.945Z",
                            "short_description": "Products",
                            "title": "Products",
                            "publishedAt": "2025-01-07T07:17:28.132Z",
                            "locale": "en",
                            "root_category": true,
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "icon": {
                                "data": {
                                    "id": 15,
                                    "attributes": {
                                        "name": "category.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 22,
                                        "height": 22,
                                        "formats": null,
                                        "hash": "category_a8d318040a",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 1.36,
                                        "url": "/uploads/category_a8d318040a.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:17:23.549Z",
                                        "updatedAt": "2025-01-07T07:17:23.549Z"
                                    }
                                }
                            },
                            "sub_categories": {
                                "data": []
                            },
                            "category_groups": {
                                "data": [
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Enterprise",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:49.545Z",
                                            "updatedAt": "2025-01-07T07:10:20.425Z",
                                            "publishedAt": "2025-01-07T07:09:50.473Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Partners",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:10:09.889Z",
                                            "updatedAt": "2025-01-07T07:10:10.883Z",
                                            "publishedAt": "2025-01-07T07:10:10.881Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Small Business",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:27.975Z",
                                            "updatedAt": "2025-01-07T07:10:33.570Z",
                                            "publishedAt": "2025-01-07T07:09:28.779Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 8,
                        "attributes": {
                            "slug": "trending-articles",
                            "description": null,
                            "createdAt": "2025-01-07T07:19:59.167Z",
                            "updatedAt": "2025-01-07T07:38:48.614Z",
                            "short_description": "Trending Articles",
                            "title": "Trending Articles",
                            "publishedAt": "2025-01-07T07:20:00.253Z",
                            "locale": "en",
                            "root_category": true,
                            "articles": {
                                "data": []
                            },
                            "icon": {
                                "data": {
                                    "id": 16,
                                    "attributes": {
                                        "name": "arrow_outward.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 22,
                                        "height": 22,
                                        "formats": null,
                                        "hash": "arrow_outward_220bc7bc73",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.5,
                                        "url": "/uploads/arrow_outward_220bc7bc73.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:19:41.719Z",
                                        "updatedAt": "2025-01-07T07:19:41.719Z"
                                    }
                                }
                            },
                            "sub_categories": {
                                "data": []
                            },
                            "category_groups": {
                                "data": [
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Enterprise",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:49.545Z",
                                            "updatedAt": "2025-01-07T07:10:20.425Z",
                                            "publishedAt": "2025-01-07T07:09:50.473Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Partners",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:10:09.889Z",
                                            "updatedAt": "2025-01-07T07:10:10.883Z",
                                            "publishedAt": "2025-01-07T07:10:10.881Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Small Business",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:27.975Z",
                                            "updatedAt": "2025-01-07T07:10:33.570Z",
                                            "publishedAt": "2025-01-07T07:09:28.779Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "products": {
                                "data": []
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 9,
                        "attributes": {
                            "slug": "faqs",
                            "description": null,
                            "createdAt": "2025-01-07T07:22:38.128Z",
                            "updatedAt": "2025-01-07T07:38:22.570Z",
                            "short_description": "FAQs",
                            "title": "FAQs",
                            "publishedAt": "2025-01-07T07:22:50.046Z",
                            "locale": "en",
                            "root_category": true,
                            "articles": {
                                "data": []
                            },
                            "icon": {
                                "data": {
                                    "id": 17,
                                    "attributes": {
                                        "name": "question_mark.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 22,
                                        "height": 22,
                                        "formats": null,
                                        "hash": "question_mark_1c80802bfa",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 1.55,
                                        "url": "/uploads/question_mark_1c80802bfa.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T07:22:26.688Z",
                                        "updatedAt": "2025-01-07T07:22:26.688Z"
                                    }
                                }
                            },
                            "sub_categories": {
                                "data": []
                            },
                            "category_groups": {
                                "data": [
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Enterprise",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:49.545Z",
                                            "updatedAt": "2025-01-07T07:10:20.425Z",
                                            "publishedAt": "2025-01-07T07:09:50.473Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Partners",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:10:09.889Z",
                                            "updatedAt": "2025-01-07T07:10:10.883Z",
                                            "publishedAt": "2025-01-07T07:10:10.881Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Small Business",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:27.975Z",
                                            "updatedAt": "2025-01-07T07:10:33.570Z",
                                            "publishedAt": "2025-01-07T07:09:28.779Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "products": {
                                "data": []
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 10,
                        "attributes": {
                            "slug": "glossary",
                            "description": null,
                            "createdAt": "2025-01-07T12:28:45.816Z",
                            "updatedAt": "2025-01-07T12:30:06.703Z",
                            "short_description": null,
                            "title": "Glossary",
                            "publishedAt": "2025-01-07T12:30:06.701Z",
                            "locale": "en",
                            "root_category": true,
                            "articles": {
                                "data": []
                            },
                            "icon": {
                                "data": {
                                    "id": 31,
                                    "attributes": {
                                        "name": "receipt.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 12,
                                        "height": 12,
                                        "formats": null,
                                        "hash": "receipt_7cfac422c0",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.68,
                                        "url": "/uploads/receipt_7cfac422c0.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T12:27:26.265Z",
                                        "updatedAt": "2025-01-07T12:27:26.265Z"
                                    }
                                }
                            },
                            "sub_categories": {
                                "data": []
                            },
                            "category_groups": {
                                "data": [
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Enterprise",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:49.545Z",
                                            "updatedAt": "2025-01-07T07:10:20.425Z",
                                            "publishedAt": "2025-01-07T07:09:50.473Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Partners",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:10:09.889Z",
                                            "updatedAt": "2025-01-07T07:10:10.883Z",
                                            "publishedAt": "2025-01-07T07:10:10.881Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Small Business",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:09:27.975Z",
                                            "updatedAt": "2025-01-07T07:10:33.570Z",
                                            "publishedAt": "2025-01-07T07:09:28.779Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "products": {
                                "data": []
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    }
                ],
                "meta": {
                    "pagination": {
                        "page": 1,
                        "pageSize": 25,
                        "pageCount": 1,
                        "total": 5
                    }
                }
            },
            "articles": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "Small Business",
                            "description": null,
                            "createdAt": "2025-01-07T07:09:27.975Z",
                            "updatedAt": "2025-01-07T07:10:33.570Z",
                            "publishedAt": "2025-01-07T07:09:28.779Z",
                            "locale": "en",
                            "categories": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 10,
                                        "attributes": {
                                            "slug": "glossary",
                                            "description": null,
                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                            "short_description": null,
                                            "title": "Glossary",
                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Enterprise",
                            "description": null,
                            "createdAt": "2025-01-07T07:09:49.545Z",
                            "updatedAt": "2025-01-07T07:10:20.425Z",
                            "publishedAt": "2025-01-07T07:09:50.473Z",
                            "locale": "en",
                            "categories": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 10,
                                        "attributes": {
                                            "slug": "glossary",
                                            "description": null,
                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                            "short_description": null,
                                            "title": "Glossary",
                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Partners",
                            "description": null,
                            "createdAt": "2025-01-07T07:10:09.889Z",
                            "updatedAt": "2025-01-07T07:10:10.883Z",
                            "publishedAt": "2025-01-07T07:10:10.881Z",
                            "locale": "en",
                            "categories": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 10,
                                        "attributes": {
                                            "slug": "glossary",
                                            "description": null,
                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                            "short_description": null,
                                            "title": "Glossary",
                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    }
                ],
                "meta": {
                    "pagination": {
                        "page": 1,
                        "pageSize": 25,
                        "pageCount": 1,
                        "total": 3
                    }
                }
            },
            "category_groups": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "Small Business",
                            "description": null,
                            "createdAt": "2025-01-07T07:09:27.975Z",
                            "updatedAt": "2025-01-07T07:10:33.570Z",
                            "publishedAt": "2025-01-07T07:09:28.779Z",
                            "locale": "en",
                            "categories": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 10,
                                        "attributes": {
                                            "slug": "glossary",
                                            "description": null,
                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                            "short_description": null,
                                            "title": "Glossary",
                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 2,
                        "attributes": {
                            "title": "Enterprise",
                            "description": null,
                            "createdAt": "2025-01-07T07:09:49.545Z",
                            "updatedAt": "2025-01-07T07:10:20.425Z",
                            "publishedAt": "2025-01-07T07:09:50.473Z",
                            "locale": "en",
                            "categories": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 10,
                                        "attributes": {
                                            "slug": "glossary",
                                            "description": null,
                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                            "short_description": null,
                                            "title": "Glossary",
                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 3,
                        "attributes": {
                            "title": "Partners",
                            "description": null,
                            "createdAt": "2025-01-07T07:10:09.889Z",
                            "updatedAt": "2025-01-07T07:10:10.883Z",
                            "publishedAt": "2025-01-07T07:10:10.881Z",
                            "locale": "en",
                            "categories": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "slug": "news-updates",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                            "short_description": "News & Updates",
                                            "title": "News & Updates",
                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 7,
                                        "attributes": {
                                            "slug": "products",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                            "short_description": "Products",
                                            "title": "Products",
                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 8,
                                        "attributes": {
                                            "slug": "trending-articles",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                            "short_description": "Trending Articles",
                                            "title": "Trending Articles",
                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 9,
                                        "attributes": {
                                            "slug": "faqs",
                                            "description": null,
                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                            "short_description": "FAQs",
                                            "title": "FAQs",
                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    },
                                    {
                                        "id": 10,
                                        "attributes": {
                                            "slug": "glossary",
                                            "description": null,
                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                            "short_description": null,
                                            "title": "Glossary",
                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                            "locale": "en",
                                            "root_category": true
                                        }
                                    }
                                ]
                            },
                            "content_classification": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "Public",
                                        "description": null,
                                        "public": true,
                                        "createdAt": "2025-01-07T07:06:07.701Z",
                                        "updatedAt": "2025-01-07T07:06:09.301Z",
                                        "publishedAt": "2025-01-07T07:06:09.297Z",
                                        "slug": "public"
                                    }
                                }
                            },
                            "articles": {
                                "data": [
                                    {
                                        "id": 6,
                                        "attributes": {
                                            "title": "Payment Link",
                                            "createdAt": "2025-01-07T16:08:46.699Z",
                                            "updatedAt": "2025-01-07T16:48:28.428Z",
                                            "publishedAt": "2025-01-07T16:08:49.482Z",
                                            "subtitle": "Payments in a matter of seconds",
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "locale": "en",
                                            "time_to_read": "15 mins"
                                        }
                                    }
                                ]
                            },
                            "products": {
                                "data": [
                                    {
                                        "id": 1,
                                        "attributes": {
                                            "title": "Optic Mobile",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:04:09.139Z",
                                            "updatedAt": "2025-01-07T12:04:10.543Z",
                                            "publishedAt": "2025-01-07T12:04:10.541Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "title": "Paysafe Card",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:05:39.644Z",
                                            "updatedAt": "2025-01-07T12:05:40.573Z",
                                            "publishedAt": "2025-01-07T12:05:40.572Z",
                                            "locale": "en"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "title": "Paysafe Wallet",
                                            "subtitle": null,
                                            "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                            "createdAt": "2025-01-07T12:06:52.058Z",
                                            "updatedAt": "2025-01-07T12:06:52.920Z",
                                            "publishedAt": "2025-01-07T12:06:52.918Z",
                                            "locale": "en"
                                        }
                                    }
                                ]
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    }
                ],
                "meta": {
                    "pagination": {
                        "page": 1,
                        "pageSize": 25,
                        "pageCount": 1,
                        "total": 3
                    }
                }
            }
        };
        return of(mockJsonContract);

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

        const mockJsonContract = {
            "data": {
                "id": 7,
                "attributes": {
                    "title": "Payments API",
                    "createdAt": "2025-01-16T18:55:28.251Z",
                    "updatedAt": "2025-01-16T22:56:15.091Z",
                    "publishedAt": "2025-01-16T19:00:41.980Z",
                    "subtitle": "Payments API Sub",
                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                    "locale": "en",
                    "time_to_read": "15 mins",
                    "page_template": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "createdAt": "2025-01-07T09:20:54.152Z",
                                "updatedAt": "2025-01-16T23:08:39.088Z",
                                "publishedAt": "2025-01-07T09:20:57.228Z",
                                "styles": null,
                                "theme": null,
                                "name": "Article Template",
                                "slug": "article-template",
                                "locale": "en",
                                "header": {
                                    "id": 1,
                                    "language_selector": {
                                        "id": 3,
                                        "languages": {
                                            "data": [
                                                {
                                                    "id": 4,
                                                    "attributes": {
                                                        "name": "British English",
                                                        "code": "en-gb",
                                                        "createdAt": "2025-01-07T09:02:29.996Z",
                                                        "updatedAt": "2025-01-07T09:02:30.859Z",
                                                        "publishedAt": "2025-01-07T09:02:30.858Z",
                                                        "display": null
                                                    }
                                                },
                                                {
                                                    "id": 2,
                                                    "attributes": {
                                                        "name": "Canadian English",
                                                        "code": "en-ca",
                                                        "createdAt": "2025-01-07T09:00:03.390Z",
                                                        "updatedAt": "2025-01-07T09:02:47.463Z",
                                                        "publishedAt": "2025-01-07T09:00:04.322Z",
                                                        "display": null
                                                    }
                                                },
                                                {
                                                    "id": 3,
                                                    "attributes": {
                                                        "name": "Canadian French",
                                                        "code": "fr-ca",
                                                        "createdAt": "2025-01-07T09:00:28.952Z",
                                                        "updatedAt": "2025-01-07T09:03:05.472Z",
                                                        "publishedAt": "2025-01-07T09:00:29.662Z",
                                                        "display": null
                                                    }
                                                },
                                                {
                                                    "id": 1,
                                                    "attributes": {
                                                        "name": "US English",
                                                        "code": "en-us",
                                                        "createdAt": "2025-01-07T08:59:20.383Z",
                                                        "updatedAt": "2025-01-07T09:03:21.186Z",
                                                        "publishedAt": "2025-01-07T08:59:21.443Z",
                                                        "display": null
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    "logo": {
                                        "id": 3,
                                        "logo": {
                                            "data": {
                                                "id": 24,
                                                "attributes": {
                                                    "name": "vector.svg",
                                                    "alternativeText": null,
                                                    "caption": null,
                                                    "width": 119,
                                                    "height": 28,
                                                    "formats": null,
                                                    "hash": "vector_64d394624c",
                                                    "ext": ".svg",
                                                    "mime": "image/svg+xml",
                                                    "size": 4.96,
                                                    "url": "/uploads/vector_64d394624c.svg",
                                                    "previewUrl": null,
                                                    "provider": "local",
                                                    "provider_metadata": null,
                                                    "createdAt": "2025-01-07T08:49:51.124Z",
                                                    "updatedAt": "2025-01-07T08:49:51.124Z"
                                                }
                                            }
                                        }
                                    },
                                    "mobile_logo": {
                                        "id": 3,
                                        "mobile_logo": {
                                            "data": {
                                                "id": 24,
                                                "attributes": {
                                                    "name": "vector.svg",
                                                    "alternativeText": null,
                                                    "caption": null,
                                                    "width": 119,
                                                    "height": 28,
                                                    "formats": null,
                                                    "hash": "vector_64d394624c",
                                                    "ext": ".svg",
                                                    "mime": "image/svg+xml",
                                                    "size": 4.96,
                                                    "url": "/uploads/vector_64d394624c.svg",
                                                    "previewUrl": null,
                                                    "provider": "local",
                                                    "provider_metadata": null,
                                                    "createdAt": "2025-01-07T08:49:51.124Z",
                                                    "updatedAt": "2025-01-07T08:49:51.124Z"
                                                }
                                            }
                                        }
                                    },
                                    "user_login": {
                                        "id": 3,
                                        "token_variable": "auth_token",
                                        "login_url": "https://login_url"
                                    }
                                },
                                "sidebar": {
                                    "id": 1,
                                    "sidebar_sections": [
                                        {
                                            "id": 5,
                                            "title": "News & Updates",
                                            "group_by_product": false,
                                            "group_by_topics": false,
                                            "categories": {
                                                "data": [
                                                    {
                                                        "id": 6,
                                                        "attributes": {
                                                            "slug": "news-updates",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                                            "short_description": "News & Updates",
                                                            "title": "News & Updates",
                                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": 6,
                                            "title": "Products",
                                            "group_by_product": true,
                                            "group_by_topics": false,
                                            "categories": {
                                                "data": [
                                                    {
                                                        "id": 9,
                                                        "attributes": {
                                                            "slug": "faqs",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                                            "short_description": "FAQs",
                                                            "title": "FAQs",
                                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 10,
                                                        "attributes": {
                                                            "slug": "glossary",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                                            "short_description": null,
                                                            "title": "Glossary",
                                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 6,
                                                        "attributes": {
                                                            "slug": "news-updates",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                                            "short_description": "News & Updates",
                                                            "title": "News & Updates",
                                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 7,
                                                        "attributes": {
                                                            "slug": "products",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                                            "short_description": "Products",
                                                            "title": "Products",
                                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 8,
                                                        "attributes": {
                                                            "slug": "trending-articles",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                                            "short_description": "Trending Articles",
                                                            "title": "Trending Articles",
                                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": 7,
                                            "title": "Topics",
                                            "group_by_product": false,
                                            "group_by_topics": true,
                                            "categories": {
                                                "data": [
                                                    {
                                                        "id": 9,
                                                        "attributes": {
                                                            "slug": "faqs",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                                            "short_description": "FAQs",
                                                            "title": "FAQs",
                                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 10,
                                                        "attributes": {
                                                            "slug": "glossary",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                                            "short_description": null,
                                                            "title": "Glossary",
                                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 6,
                                                        "attributes": {
                                                            "slug": "news-updates",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:16:22.380Z",
                                                            "updatedAt": "2025-01-07T07:38:29.493Z",
                                                            "short_description": "News & Updates",
                                                            "title": "News & Updates",
                                                            "publishedAt": "2025-01-07T07:21:05.768Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 7,
                                                        "attributes": {
                                                            "slug": "products",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:16:56.996Z",
                                                            "updatedAt": "2025-01-07T07:38:35.945Z",
                                                            "short_description": "Products",
                                                            "title": "Products",
                                                            "publishedAt": "2025-01-07T07:17:28.132Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 8,
                                                        "attributes": {
                                                            "slug": "trending-articles",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                                            "short_description": "Trending Articles",
                                                            "title": "Trending Articles",
                                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": 8,
                                            "title": "Resources",
                                            "group_by_product": false,
                                            "group_by_topics": false,
                                            "categories": {
                                                "data": [
                                                    {
                                                        "id": 10,
                                                        "attributes": {
                                                            "slug": "glossary",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T12:28:45.816Z",
                                                            "updatedAt": "2025-01-07T12:30:06.703Z",
                                                            "short_description": null,
                                                            "title": "Glossary",
                                                            "publishedAt": "2025-01-07T12:30:06.701Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 9,
                                                        "attributes": {
                                                            "slug": "faqs",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:22:38.128Z",
                                                            "updatedAt": "2025-01-07T07:38:22.570Z",
                                                            "short_description": "FAQs",
                                                            "title": "FAQs",
                                                            "publishedAt": "2025-01-07T07:22:50.046Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    },
                                                    {
                                                        "id": 8,
                                                        "attributes": {
                                                            "slug": "trending-articles",
                                                            "description": null,
                                                            "createdAt": "2025-01-07T07:19:59.167Z",
                                                            "updatedAt": "2025-01-07T07:38:48.614Z",
                                                            "short_description": "Trending Articles",
                                                            "title": "Trending Articles",
                                                            "publishedAt": "2025-01-07T07:20:00.253Z",
                                                            "locale": "en",
                                                            "root_category": true
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "contact_us": {
                                    "id": 1,
                                    "title": "Need more help?",
                                    "subtitle": "Contact us",
                                    "url": "#",
                                    "icon": {
                                        "data": {
                                            "id": 33,
                                            "attributes": {
                                                "name": "large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                "alternativeText": null,
                                                "caption": null,
                                                "width": 1000,
                                                "height": 666,
                                                "formats": {
                                                    "thumbnail": {
                                                        "name": "thumbnail_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                        "hash": "thumbnail_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                        "ext": ".jpg",
                                                        "mime": "image/jpeg",
                                                        "path": null,
                                                        "width": 234,
                                                        "height": 156,
                                                        "size": 6.75,
                                                        "sizeInBytes": 6750,
                                                        "url": "/uploads/thumbnail_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg"
                                                    },
                                                    "medium": {
                                                        "name": "medium_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                        "hash": "medium_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                        "ext": ".jpg",
                                                        "mime": "image/jpeg",
                                                        "path": null,
                                                        "width": 750,
                                                        "height": 500,
                                                        "size": 33.98,
                                                        "sizeInBytes": 33983,
                                                        "url": "/uploads/medium_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg"
                                                    },
                                                    "small": {
                                                        "name": "small_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                        "hash": "small_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                        "ext": ".jpg",
                                                        "mime": "image/jpeg",
                                                        "path": null,
                                                        "width": 500,
                                                        "height": 333,
                                                        "size": 19.55,
                                                        "sizeInBytes": 19548,
                                                        "url": "/uploads/small_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg"
                                                    }
                                                },
                                                "hash": "large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                "ext": ".jpg",
                                                "mime": "image/jpeg",
                                                "size": 50.97,
                                                "url": "/uploads/large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg",
                                                "previewUrl": null,
                                                "provider": "local",
                                                "provider_metadata": null,
                                                "createdAt": "2025-01-16T22:55:14.125Z",
                                                "updatedAt": "2025-01-16T22:55:14.125Z"
                                            }
                                        }
                                    }
                                },
                                "feedback_section": {
                                    "id": 1,
                                    "icon": {
                                        "data": {
                                            "id": 31,
                                            "attributes": {
                                                "name": "receipt.svg",
                                                "alternativeText": null,
                                                "caption": null,
                                                "width": 12,
                                                "height": 12,
                                                "formats": null,
                                                "hash": "receipt_7cfac422c0",
                                                "ext": ".svg",
                                                "mime": "image/svg+xml",
                                                "size": 0.68,
                                                "url": "/uploads/receipt_7cfac422c0.svg",
                                                "previewUrl": null,
                                                "provider": "local",
                                                "provider_metadata": null,
                                                "createdAt": "2025-01-07T12:27:26.265Z",
                                                "updatedAt": "2025-01-16T22:52:02.412Z"
                                            }
                                        }
                                    }
                                },
                                "footer_section": {
                                    "id": 3,
                                    "label": "Footer",
                                    "copyright": null,
                                    "max_colums": 1,
                                    "footer_links": [
                                        {
                                            "id": 9,
                                            "label": "Home",
                                            "url": "#"
                                        },
                                        {
                                            "id": 10,
                                            "label": "Data",
                                            "url": "#"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 7,
                            "attributes": {
                                "slug": "products",
                                "description": null,
                                "createdAt": "2025-01-07T07:16:56.996Z",
                                "updatedAt": "2025-01-07T07:38:35.945Z",
                                "short_description": "Products",
                                "title": "Products",
                                "publishedAt": "2025-01-07T07:17:28.132Z",
                                "locale": "en",
                                "root_category": true,
                                "articles": {
                                    "data": [
                                        {
                                            "id": 6,
                                            "attributes": {
                                                "title": "Payment Link",
                                                "createdAt": "2025-01-07T16:08:46.699Z",
                                                "updatedAt": "2025-01-07T16:48:28.428Z",
                                                "publishedAt": "2025-01-07T16:08:49.482Z",
                                                "subtitle": "Payments in a matter of seconds",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 7,
                                            "attributes": {
                                                "title": "Payments API",
                                                "createdAt": "2025-01-16T18:55:28.251Z",
                                                "updatedAt": "2025-01-16T22:56:15.091Z",
                                                "publishedAt": "2025-01-16T19:00:41.980Z",
                                                "subtitle": "Payments API Sub",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 8,
                                            "attributes": {
                                                "title": "New Optic App",
                                                "createdAt": "2025-01-16T19:01:50.873Z",
                                                "updatedAt": "2025-01-16T19:02:39.400Z",
                                                "publishedAt": "2025-01-16T19:02:39.398Z",
                                                "subtitle": "New Optic App",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 10,
                                            "attributes": {
                                                "title": "New Optic App",
                                                "createdAt": "2025-01-16T21:59:58.638Z",
                                                "updatedAt": "2025-01-16T22:01:05.278Z",
                                                "publishedAt": "2025-01-16T22:01:05.276Z",
                                                "subtitle": "New Optic App",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        }
                                    ]
                                },
                                "icon": {
                                    "data": {
                                        "id": 15,
                                        "attributes": {
                                            "name": "category.svg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 22,
                                            "height": 22,
                                            "formats": null,
                                            "hash": "category_a8d318040a",
                                            "ext": ".svg",
                                            "mime": "image/svg+xml",
                                            "size": 1.36,
                                            "url": "/uploads/category_a8d318040a.svg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2025-01-07T07:17:23.549Z",
                                            "updatedAt": "2025-01-07T07:17:23.549Z"
                                        }
                                    }
                                },
                                "sub_categories": {
                                    "data": []
                                },
                                "category_groups": {
                                    "data": [
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "Enterprise",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:09:49.545Z",
                                                "updatedAt": "2025-01-07T07:10:20.425Z",
                                                "publishedAt": "2025-01-07T07:09:50.473Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Partners",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:10:09.889Z",
                                                "updatedAt": "2025-01-07T07:10:10.883Z",
                                                "publishedAt": "2025-01-07T07:10:10.881Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Small Business",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:09:27.975Z",
                                                "updatedAt": "2025-01-07T07:10:33.570Z",
                                                "publishedAt": "2025-01-07T07:09:28.779Z",
                                                "locale": "en"
                                            }
                                        }
                                    ]
                                },
                                "content_classification": {
                                    "data": {
                                        "id": 1,
                                        "attributes": {
                                            "name": "Public",
                                            "description": null,
                                            "public": true,
                                            "createdAt": "2025-01-07T07:06:07.701Z",
                                            "updatedAt": "2025-01-07T07:06:09.301Z",
                                            "publishedAt": "2025-01-07T07:06:09.297Z",
                                            "slug": "public"
                                        }
                                    }
                                },
                                "products": {
                                    "data": [
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Optic Mobile",
                                                "subtitle": null,
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T12:04:09.139Z",
                                                "updatedAt": "2025-01-07T12:04:10.543Z",
                                                "publishedAt": "2025-01-07T12:04:10.541Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "Paysafe Card",
                                                "subtitle": null,
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T12:05:39.644Z",
                                                "updatedAt": "2025-01-07T12:05:40.573Z",
                                                "publishedAt": "2025-01-07T12:05:40.572Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Paysafe Wallet",
                                                "subtitle": null,
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T12:06:52.058Z",
                                                "updatedAt": "2025-01-07T12:06:52.920Z",
                                                "publishedAt": "2025-01-07T12:06:52.918Z",
                                                "locale": "en"
                                            }
                                        }
                                    ]
                                },
                                "localizations": {
                                    "data": []
                                }
                            }
                        }
                    },
                    "related_articles": {
                        "data": []
                    },
                    "sections": [
                        {
                            "id": 3,
                            "__component": "shared.image",
                            "title": null,
                            "image": {
                                "data": {
                                    "id": 27,
                                    "attributes": {
                                        "name": "20190917170935!Flag_of_the_United_Kingdom.svg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 1200,
                                        "height": 600,
                                        "formats": null,
                                        "hash": "20190917170935_Flag_of_the_United_Kingdom_bdeaad89f3",
                                        "ext": ".svg",
                                        "mime": "image/svg+xml",
                                        "size": 0.52,
                                        "url": "/uploads/20190917170935_Flag_of_the_United_Kingdom_bdeaad89f3.svg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-07T09:02:22.051Z",
                                        "updatedAt": "2025-01-16T22:52:04.416Z"
                                    }
                                }
                            }
                        },
                        {
                            "id": 2,
                            "__component": "shared.rich-text",
                            "content": [
                                {
                                    "type": "paragraph",
                                    "children": [
                                        {
                                            "type": "text",
                                            "text": "In today’s fast-paced world, your customers expect quick and easy ways to make payments. A payment link delivers just that, transforming how you collect payments. No more waiting for checks to arrive, chasing down invoices, or dealing with complicated bank transfers. With just a few clicks, you can offer a professional, secure, and convenient way for your customers to pay you. Whether you’re closing a deal, collecting donations, or just making everyday transactions smoother, a payment link is the perfect solution."
                                        }
                                    ]
                                },
                                {
                                    "type": "paragraph",
                                    "children": [
                                        {
                                            "type": "text",
                                            "text": "Ready to get started? Log in to your account now and create your first payment link!"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "__component": "shared.table",
                            "rows": [
                                {
                                    "id": 2,
                                    "header": true,
                                    "style": null,
                                    "cells": [
                                        {
                                            "id": 3,
                                            "order": 1,
                                            "label": "Test"
                                        },
                                        {
                                            "id": 4,
                                            "order": 2,
                                            "label": "Test 2"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "__component": "shared.contextual-message",
                            "title": "Test",
                            "message": "Lorem ipsum",
                            "state": "Neutral"
                        },
                        {
                            "id": 8,
                            "__component": "shared.image",
                            "title": "Ejemplos",
                            "image": {
                                "data": {
                                    "id": 33,
                                    "attributes": {
                                        "name": "large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": 1000,
                                        "height": 666,
                                        "formats": {
                                            "thumbnail": {
                                                "name": "thumbnail_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                "hash": "thumbnail_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                "ext": ".jpg",
                                                "mime": "image/jpeg",
                                                "path": null,
                                                "width": 234,
                                                "height": 156,
                                                "size": 6.75,
                                                "sizeInBytes": 6750,
                                                "url": "/uploads/thumbnail_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg"
                                            },
                                            "medium": {
                                                "name": "medium_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                "hash": "medium_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                "ext": ".jpg",
                                                "mime": "image/jpeg",
                                                "path": null,
                                                "width": 750,
                                                "height": 500,
                                                "size": 33.98,
                                                "sizeInBytes": 33983,
                                                "url": "/uploads/medium_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg"
                                            },
                                            "small": {
                                                "name": "small_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119.jpg",
                                                "hash": "small_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                                "ext": ".jpg",
                                                "mime": "image/jpeg",
                                                "path": null,
                                                "width": 500,
                                                "height": 333,
                                                "size": 19.55,
                                                "sizeInBytes": 19548,
                                                "url": "/uploads/small_large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg"
                                            }
                                        },
                                        "hash": "large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "size": 50.97,
                                        "url": "/uploads/large_a_bug_is_becoming_a_meme_on_the_internet_2afbff8119_7dbd58accc.jpg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2025-01-16T22:55:14.125Z",
                                        "updatedAt": "2025-01-16T22:55:14.125Z"
                                    }
                                }
                            }
                        }
                    ],
                    "topics": {
                        "data": [
                            {
                                "id": 4,
                                "attributes": {
                                    "title": "Analytics",
                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                    "createdAt": "2025-01-07T07:30:59.897Z",
                                    "updatedAt": "2025-01-07T07:31:00.700Z",
                                    "publishedAt": "2025-01-07T07:31:00.698Z",
                                    "searchable": true,
                                    "locale": "en",
                                    "description": null,
                                    "icon": {
                                        "data": {
                                            "id": 21,
                                            "attributes": {
                                                "name": "trending_up.svg",
                                                "alternativeText": null,
                                                "caption": null,
                                                "width": 16,
                                                "height": 16,
                                                "formats": null,
                                                "hash": "trending_up_576089c40d",
                                                "ext": ".svg",
                                                "mime": "image/svg+xml",
                                                "size": 0.54,
                                                "url": "/uploads/trending_up_576089c40d.svg",
                                                "previewUrl": null,
                                                "provider": "local",
                                                "provider_metadata": null,
                                                "createdAt": "2025-01-07T07:30:53.495Z",
                                                "updatedAt": "2025-01-07T07:30:53.495Z"
                                            }
                                        }
                                    },
                                    "articles": {
                                        "data": [
                                            {
                                                "id": 6,
                                                "attributes": {
                                                    "title": "Payment Link",
                                                    "createdAt": "2025-01-07T16:08:46.699Z",
                                                    "updatedAt": "2025-01-07T16:48:28.428Z",
                                                    "publishedAt": "2025-01-07T16:08:49.482Z",
                                                    "subtitle": "Payments in a matter of seconds",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 7,
                                                "attributes": {
                                                    "title": "Payments API",
                                                    "createdAt": "2025-01-16T18:55:28.251Z",
                                                    "updatedAt": "2025-01-16T22:56:15.091Z",
                                                    "publishedAt": "2025-01-16T19:00:41.980Z",
                                                    "subtitle": "Payments API Sub",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 8,
                                                "attributes": {
                                                    "title": "New Optic App",
                                                    "createdAt": "2025-01-16T19:01:50.873Z",
                                                    "updatedAt": "2025-01-16T19:02:39.400Z",
                                                    "publishedAt": "2025-01-16T19:02:39.398Z",
                                                    "subtitle": "New Optic App",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 9,
                                                "attributes": {
                                                    "title": "Embedded Wallets",
                                                    "createdAt": "2025-01-16T21:50:44.982Z",
                                                    "updatedAt": "2025-01-16T21:52:22.506Z",
                                                    "publishedAt": "2025-01-16T21:52:22.503Z",
                                                    "subtitle": "Embedded Wallets",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 10,
                                                "attributes": {
                                                    "title": "New Optic App",
                                                    "createdAt": "2025-01-16T21:59:58.638Z",
                                                    "updatedAt": "2025-01-16T22:01:05.278Z",
                                                    "publishedAt": "2025-01-16T22:01:05.276Z",
                                                    "subtitle": "New Optic App",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 11,
                                                "attributes": {
                                                    "title": "Paysafe Checkout",
                                                    "createdAt": "2025-01-16T22:00:03.596Z",
                                                    "updatedAt": "2025-01-16T22:00:36.782Z",
                                                    "publishedAt": "2025-01-16T22:00:36.781Z",
                                                    "subtitle": "Paysafe Checkout",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            }
                                        ]
                                    },
                                    "content_classification": {
                                        "data": {
                                            "id": 1,
                                            "attributes": {
                                                "name": "Public",
                                                "description": null,
                                                "public": true,
                                                "createdAt": "2025-01-07T07:06:07.701Z",
                                                "updatedAt": "2025-01-07T07:06:09.301Z",
                                                "publishedAt": "2025-01-07T07:06:09.297Z",
                                                "slug": "public"
                                            }
                                        }
                                    },
                                    "localizations": {
                                        "data": []
                                    }
                                }
                            },
                            {
                                "id": 2,
                                "attributes": {
                                    "title": "My account",
                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                    "createdAt": "2025-01-07T07:29:06.074Z",
                                    "updatedAt": "2025-01-07T07:29:07.904Z",
                                    "publishedAt": "2025-01-07T07:29:07.902Z",
                                    "searchable": true,
                                    "locale": "en",
                                    "description": null,
                                    "icon": {
                                        "data": {
                                            "id": 19,
                                            "attributes": {
                                                "name": "person.svg",
                                                "alternativeText": null,
                                                "caption": null,
                                                "width": 16,
                                                "height": 16,
                                                "formats": null,
                                                "hash": "person_11557bc7fb",
                                                "ext": ".svg",
                                                "mime": "image/svg+xml",
                                                "size": 2.01,
                                                "url": "/uploads/person_11557bc7fb.svg",
                                                "previewUrl": null,
                                                "provider": "local",
                                                "provider_metadata": null,
                                                "createdAt": "2025-01-07T07:28:55.161Z",
                                                "updatedAt": "2025-01-07T07:28:55.161Z"
                                            }
                                        }
                                    },
                                    "articles": {
                                        "data": [
                                            {
                                                "id": 6,
                                                "attributes": {
                                                    "title": "Payment Link",
                                                    "createdAt": "2025-01-07T16:08:46.699Z",
                                                    "updatedAt": "2025-01-07T16:48:28.428Z",
                                                    "publishedAt": "2025-01-07T16:08:49.482Z",
                                                    "subtitle": "Payments in a matter of seconds",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 7,
                                                "attributes": {
                                                    "title": "Payments API",
                                                    "createdAt": "2025-01-16T18:55:28.251Z",
                                                    "updatedAt": "2025-01-16T22:56:15.091Z",
                                                    "publishedAt": "2025-01-16T19:00:41.980Z",
                                                    "subtitle": "Payments API Sub",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 8,
                                                "attributes": {
                                                    "title": "New Optic App",
                                                    "createdAt": "2025-01-16T19:01:50.873Z",
                                                    "updatedAt": "2025-01-16T19:02:39.400Z",
                                                    "publishedAt": "2025-01-16T19:02:39.398Z",
                                                    "subtitle": "New Optic App",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 9,
                                                "attributes": {
                                                    "title": "Embedded Wallets",
                                                    "createdAt": "2025-01-16T21:50:44.982Z",
                                                    "updatedAt": "2025-01-16T21:52:22.506Z",
                                                    "publishedAt": "2025-01-16T21:52:22.503Z",
                                                    "subtitle": "Embedded Wallets",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 10,
                                                "attributes": {
                                                    "title": "New Optic App",
                                                    "createdAt": "2025-01-16T21:59:58.638Z",
                                                    "updatedAt": "2025-01-16T22:01:05.278Z",
                                                    "publishedAt": "2025-01-16T22:01:05.276Z",
                                                    "subtitle": "New Optic App",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 11,
                                                "attributes": {
                                                    "title": "Paysafe Checkout",
                                                    "createdAt": "2025-01-16T22:00:03.596Z",
                                                    "updatedAt": "2025-01-16T22:00:36.782Z",
                                                    "publishedAt": "2025-01-16T22:00:36.781Z",
                                                    "subtitle": "Paysafe Checkout",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            }
                                        ]
                                    },
                                    "content_classification": {
                                        "data": {
                                            "id": 1,
                                            "attributes": {
                                                "name": "Public",
                                                "description": null,
                                                "public": true,
                                                "createdAt": "2025-01-07T07:06:07.701Z",
                                                "updatedAt": "2025-01-07T07:06:09.301Z",
                                                "publishedAt": "2025-01-07T07:06:09.297Z",
                                                "slug": "public"
                                            }
                                        }
                                    },
                                    "localizations": {
                                        "data": []
                                    }
                                }
                            },
                            {
                                "id": 1,
                                "attributes": {
                                    "title": "Getting Started",
                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                    "createdAt": "2025-01-07T07:23:46.633Z",
                                    "updatedAt": "2025-01-07T07:24:23.903Z",
                                    "publishedAt": "2025-01-07T07:24:23.901Z",
                                    "searchable": true,
                                    "locale": "en",
                                    "description": null,
                                    "icon": {
                                        "data": {
                                            "id": 18,
                                            "attributes": {
                                                "name": "arrow_up.svg",
                                                "alternativeText": null,
                                                "caption": null,
                                                "width": 16,
                                                "height": 16,
                                                "formats": null,
                                                "hash": "arrow_up_4dad42cf3a",
                                                "ext": ".svg",
                                                "mime": "image/svg+xml",
                                                "size": 0.52,
                                                "url": "/uploads/arrow_up_4dad42cf3a.svg",
                                                "previewUrl": null,
                                                "provider": "local",
                                                "provider_metadata": null,
                                                "createdAt": "2025-01-07T07:24:15.312Z",
                                                "updatedAt": "2025-01-07T07:24:15.312Z"
                                            }
                                        }
                                    },
                                    "articles": {
                                        "data": [
                                            {
                                                "id": 6,
                                                "attributes": {
                                                    "title": "Payment Link",
                                                    "createdAt": "2025-01-07T16:08:46.699Z",
                                                    "updatedAt": "2025-01-07T16:48:28.428Z",
                                                    "publishedAt": "2025-01-07T16:08:49.482Z",
                                                    "subtitle": "Payments in a matter of seconds",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 7,
                                                "attributes": {
                                                    "title": "Payments API",
                                                    "createdAt": "2025-01-16T18:55:28.251Z",
                                                    "updatedAt": "2025-01-16T22:56:15.091Z",
                                                    "publishedAt": "2025-01-16T19:00:41.980Z",
                                                    "subtitle": "Payments API Sub",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 8,
                                                "attributes": {
                                                    "title": "New Optic App",
                                                    "createdAt": "2025-01-16T19:01:50.873Z",
                                                    "updatedAt": "2025-01-16T19:02:39.400Z",
                                                    "publishedAt": "2025-01-16T19:02:39.398Z",
                                                    "subtitle": "New Optic App",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 9,
                                                "attributes": {
                                                    "title": "Embedded Wallets",
                                                    "createdAt": "2025-01-16T21:50:44.982Z",
                                                    "updatedAt": "2025-01-16T21:52:22.506Z",
                                                    "publishedAt": "2025-01-16T21:52:22.503Z",
                                                    "subtitle": "Embedded Wallets",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 10,
                                                "attributes": {
                                                    "title": "New Optic App",
                                                    "createdAt": "2025-01-16T21:59:58.638Z",
                                                    "updatedAt": "2025-01-16T22:01:05.278Z",
                                                    "publishedAt": "2025-01-16T22:01:05.276Z",
                                                    "subtitle": "New Optic App",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            },
                                            {
                                                "id": 11,
                                                "attributes": {
                                                    "title": "Paysafe Checkout",
                                                    "createdAt": "2025-01-16T22:00:03.596Z",
                                                    "updatedAt": "2025-01-16T22:00:36.782Z",
                                                    "publishedAt": "2025-01-16T22:00:36.781Z",
                                                    "subtitle": "Paysafe Checkout",
                                                    "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                    "locale": "en",
                                                    "time_to_read": "15 mins"
                                                }
                                            }
                                        ]
                                    },
                                    "content_classification": {
                                        "data": {
                                            "id": 1,
                                            "attributes": {
                                                "name": "Public",
                                                "description": null,
                                                "public": true,
                                                "createdAt": "2025-01-07T07:06:07.701Z",
                                                "updatedAt": "2025-01-07T07:06:09.301Z",
                                                "publishedAt": "2025-01-07T07:06:09.297Z",
                                                "slug": "public"
                                            }
                                        }
                                    },
                                    "localizations": {
                                        "data": []
                                    }
                                }
                            }
                        ]
                    },
                    "content_classification": {
                        "data": {
                            "id": 1,
                            "attributes": {
                                "name": "Public",
                                "description": null,
                                "public": true,
                                "createdAt": "2025-01-07T07:06:07.701Z",
                                "updatedAt": "2025-01-07T07:06:09.301Z",
                                "publishedAt": "2025-01-07T07:06:09.297Z",
                                "slug": "public",
                                "regions": {
                                    "data": []
                                },
                                "platforms": {
                                    "data": []
                                },
                                "user_roles": {
                                    "data": []
                                },
                                "articles": {
                                    "data": [
                                        {
                                            "id": 6,
                                            "attributes": {
                                                "title": "Payment Link",
                                                "createdAt": "2025-01-07T16:08:46.699Z",
                                                "updatedAt": "2025-01-07T16:48:28.428Z",
                                                "publishedAt": "2025-01-07T16:08:49.482Z",
                                                "subtitle": "Payments in a matter of seconds",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 7,
                                            "attributes": {
                                                "title": "Payments API",
                                                "createdAt": "2025-01-16T18:55:28.251Z",
                                                "updatedAt": "2025-01-16T22:56:15.091Z",
                                                "publishedAt": "2025-01-16T19:00:41.980Z",
                                                "subtitle": "Payments API Sub",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 8,
                                            "attributes": {
                                                "title": "New Optic App",
                                                "createdAt": "2025-01-16T19:01:50.873Z",
                                                "updatedAt": "2025-01-16T19:02:39.400Z",
                                                "publishedAt": "2025-01-16T19:02:39.398Z",
                                                "subtitle": "New Optic App",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 9,
                                            "attributes": {
                                                "title": "Embedded Wallets",
                                                "createdAt": "2025-01-16T21:50:44.982Z",
                                                "updatedAt": "2025-01-16T21:52:22.506Z",
                                                "publishedAt": "2025-01-16T21:52:22.503Z",
                                                "subtitle": "Embedded Wallets",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 10,
                                            "attributes": {
                                                "title": "New Optic App",
                                                "createdAt": "2025-01-16T21:59:58.638Z",
                                                "updatedAt": "2025-01-16T22:01:05.278Z",
                                                "publishedAt": "2025-01-16T22:01:05.276Z",
                                                "subtitle": "New Optic App",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        },
                                        {
                                            "id": 11,
                                            "attributes": {
                                                "title": "Paysafe Checkout",
                                                "createdAt": "2025-01-16T22:00:03.596Z",
                                                "updatedAt": "2025-01-16T22:00:36.782Z",
                                                "publishedAt": "2025-01-16T22:00:36.781Z",
                                                "subtitle": "Paysafe Checkout",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "locale": "en",
                                                "time_to_read": "15 mins"
                                            }
                                        }
                                    ]
                                },
                                "categories": {
                                    "data": [
                                        {
                                            "id": 6,
                                            "attributes": {
                                                "slug": "news-updates",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:16:22.380Z",
                                                "updatedAt": "2025-01-07T07:38:29.493Z",
                                                "short_description": "News & Updates",
                                                "title": "News & Updates",
                                                "publishedAt": "2025-01-07T07:21:05.768Z",
                                                "locale": "en",
                                                "root_category": true
                                            }
                                        },
                                        {
                                            "id": 7,
                                            "attributes": {
                                                "slug": "products",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:16:56.996Z",
                                                "updatedAt": "2025-01-07T07:38:35.945Z",
                                                "short_description": "Products",
                                                "title": "Products",
                                                "publishedAt": "2025-01-07T07:17:28.132Z",
                                                "locale": "en",
                                                "root_category": true
                                            }
                                        },
                                        {
                                            "id": 8,
                                            "attributes": {
                                                "slug": "trending-articles",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:19:59.167Z",
                                                "updatedAt": "2025-01-07T07:38:48.614Z",
                                                "short_description": "Trending Articles",
                                                "title": "Trending Articles",
                                                "publishedAt": "2025-01-07T07:20:00.253Z",
                                                "locale": "en",
                                                "root_category": true
                                            }
                                        },
                                        {
                                            "id": 9,
                                            "attributes": {
                                                "slug": "faqs",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:22:38.128Z",
                                                "updatedAt": "2025-01-07T07:38:22.570Z",
                                                "short_description": "FAQs",
                                                "title": "FAQs",
                                                "publishedAt": "2025-01-07T07:22:50.046Z",
                                                "locale": "en",
                                                "root_category": true
                                            }
                                        },
                                        {
                                            "id": 10,
                                            "attributes": {
                                                "slug": "glossary",
                                                "description": null,
                                                "createdAt": "2025-01-07T12:28:45.816Z",
                                                "updatedAt": "2025-01-07T12:30:06.703Z",
                                                "short_description": null,
                                                "title": "Glossary",
                                                "publishedAt": "2025-01-07T12:30:06.701Z",
                                                "locale": "en",
                                                "root_category": true
                                            }
                                        }
                                    ]
                                },
                                "category_groups": {
                                    "data": [
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Partners",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:10:09.889Z",
                                                "updatedAt": "2025-01-07T07:10:10.883Z",
                                                "publishedAt": "2025-01-07T07:10:10.881Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "Enterprise",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:09:49.545Z",
                                                "updatedAt": "2025-01-07T07:10:20.425Z",
                                                "publishedAt": "2025-01-07T07:09:50.473Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Small Business",
                                                "description": null,
                                                "createdAt": "2025-01-07T07:09:27.975Z",
                                                "updatedAt": "2025-01-07T07:10:33.570Z",
                                                "publishedAt": "2025-01-07T07:09:28.779Z",
                                                "locale": "en"
                                            }
                                        }
                                    ]
                                },
                                "topics": {
                                    "data": [
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Getting Started",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                                "createdAt": "2025-01-07T07:23:46.633Z",
                                                "updatedAt": "2025-01-07T07:24:23.903Z",
                                                "publishedAt": "2025-01-07T07:24:23.901Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "My account",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                                "createdAt": "2025-01-07T07:29:06.074Z",
                                                "updatedAt": "2025-01-07T07:29:07.904Z",
                                                "publishedAt": "2025-01-07T07:29:07.902Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Disputes",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions.",
                                                "createdAt": "2025-01-07T07:30:02.498Z",
                                                "updatedAt": "2025-01-07T07:30:04.916Z",
                                                "publishedAt": "2025-01-07T07:30:04.913Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 4,
                                            "attributes": {
                                                "title": "Analytics",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T07:30:59.897Z",
                                                "updatedAt": "2025-01-07T07:31:00.700Z",
                                                "publishedAt": "2025-01-07T07:31:00.698Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        },
                                        {
                                            "id": 5,
                                            "attributes": {
                                                "title": "Transactions",
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T07:31:55.601Z",
                                                "updatedAt": "2025-01-07T07:32:03.944Z",
                                                "publishedAt": "2025-01-07T07:32:03.943Z",
                                                "searchable": true,
                                                "locale": "en",
                                                "description": null
                                            }
                                        }
                                    ]
                                },
                                "systems": {
                                    "data": []
                                },
                                "products": {
                                    "data": [
                                        {
                                            "id": 1,
                                            "attributes": {
                                                "title": "Optic Mobile",
                                                "subtitle": null,
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T12:04:09.139Z",
                                                "updatedAt": "2025-01-07T12:04:10.543Z",
                                                "publishedAt": "2025-01-07T12:04:10.541Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "attributes": {
                                                "title": "Paysafe Card",
                                                "subtitle": null,
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T12:05:39.644Z",
                                                "updatedAt": "2025-01-07T12:05:40.573Z",
                                                "publishedAt": "2025-01-07T12:05:40.572Z",
                                                "locale": "en"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Paysafe Wallet",
                                                "subtitle": null,
                                                "short_description": "We give ambitious businesses their launchpad through safe and secure online payment solutions",
                                                "createdAt": "2025-01-07T12:06:52.058Z",
                                                "updatedAt": "2025-01-07T12:06:52.920Z",
                                                "publishedAt": "2025-01-07T12:06:52.918Z",
                                                "locale": "en"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            "meta": {}
        }
        return of(mockJsonContract);
    }
}
