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
                    "data": []
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
}
