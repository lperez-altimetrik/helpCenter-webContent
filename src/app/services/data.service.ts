import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  /**
   * Simulates an asynchronous call to fetch the JSON contract.
   * Replace the mock data with a real HTTP call in production.
   */
  getSectionList(): Observable<any> {
    // This is your mock JSON contract (shortened here for example).
    const mockJsonContract = {
        "template": {
            "id": 1,
            "attributes": {
                "createdAt": "2025-01-07T08:35:37.351Z",
                "updatedAt": "2025-01-12T17:05:34.814Z",
                "publishedAt": "2025-01-07T08:35:38.567Z",
                "locale": "en",
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
                        "display_component": "related_articles",
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
                        "display_component": "related_articles",
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
                ],
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
                "page_template": {
                    "data": {
                        "id": 1,
                        "attributes": {
                            "createdAt": "2025-01-07T08:52:12.103Z",
                            "updatedAt": "2025-01-07T09:18:34.267Z",
                            "publishedAt": "2025-01-07T09:07:52.298Z",
                            "styles": null,
                            "theme": null,
                            "name": "Default Template",
                            "slug": "default-template",
                            "locale": "en",
                            "header": {
                                "id": 1,
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
                                },
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
                                }
                            }
                        }
                    }
                }
            }
        },
        "categories": [],
        "topics": [],
        "articles": []
    };
    return of(mockJsonContract).pipe(delay(1000));
  }
}
