'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crowdfundingapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' : 'data-target="#xs-components-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' :
                                            'id="xs-components-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' : 'data-target="#xs-injectables-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' :
                                        'id="xs-injectables-links-module-AppModule-bb13981ffe3a7e2130ad95560a71b046266b59eb9c6ad26524f0e082193a57cc848624d02ae4287b665382d48adace71579bdf95c64f82a9f004159c359a5e4a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' : 'data-target="#xs-components-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' :
                                            'id="xs-components-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' }>
                                            <li class="link">
                                                <a href="components/CreateProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundedProjectsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundedProjectsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyProjectsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyProjectsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyTransactionPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyTransactionPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectDetailPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectDetailPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' : 'data-target="#xs-injectables-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' :
                                        'id="xs-injectables-links-module-PagesModule-c7f926ac9e2166bfb5a4faadedadf7888351e6aa0ef34fc28fde8586098f9c2b0f26e84842823fa7027941e0a51b2295ec2f702401480e0f6ea5a7520142028c"' }>
                                        <li class="link">
                                            <a href="injectables/SharedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpinnerModule.html" data-type="entity-link" >SpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' : 'data-target="#xs-components-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' :
                                            'id="xs-components-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' : 'data-target="#xs-injectables-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' :
                                        'id="xs-injectables-links-module-SpinnerModule-0cb23b239e2097dd7bb0cc256df60e4eb4d96e05c2b859aa5278593ce5a4456ca54344a67e5e9e071f49dbff716455eae0de067b6d49e47326bc4793a768657e"' }>
                                        <li class="link">
                                            <a href="injectables/SpinnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectService.html" data-type="entity-link" >ProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RewardService.html" data-type="entity-link" >RewardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionService.html" data-type="entity-link" >TransactionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AppHttpInterceptor.html" data-type="entity-link" >AppHttpInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});