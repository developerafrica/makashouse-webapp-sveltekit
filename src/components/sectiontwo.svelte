<script>
    export let storesData;

</script>
<article class="section-two-cards">
    <div class="sts-sect">

        <div class="card-container">
            <div class="cd-cnt">
                {#each storesData as {name, products}}

                <div class="card">
                    <div class="cd">
                        <header>
                            <div class="hd">
                                <div class="artist-profile">
                                    <div class="ap-img">
                                        <img src="/icon.png" alt="artist icon">
                                    </div>
                                    <div class="ap-txt">
                                        <h1>{name}</h1>
                                        <p>{products[0].title}</p>
                                    </div>
                                </div>
                                <div class="artist-link">
                                    <div class="al">
                                        <a href="products/{products[0].id}">
                                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_27_137)">
                                                <rect x="48" y="44" width="44" height="44" rx="4" transform="rotate(-180 48 44)" fill="white" shape-rendering="crispEdges"/>
                                                <path d="M23.2982 17.7018L28.193 22.5965C28.4211 22.8246 28.4211 21.1754 28.193 21.4035L23.2982 26.2982C23.1053 26.4737 23 26.7193 23 27C23 27.5439 23.4561 28 24 28C24.2807 28 24.5263 27.8947 24.7018 27.7018L29.5965 22.807C30.0526 22.3684 30.0526 21.6316 29.5965 21.193L24.7018 16.2982C24.5263 16.1053 24.2807 16 24 16C23.4561 16 23 16.4561 23 17C23 17.2807 23.1053 17.5263 23.2982 17.7018Z" fill="#333333"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_27_137" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_137"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_137" result="shape"/>
                                                </filter>
                                                </defs>
                                                </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main>
                            <div class="mn">
                                <img src="{products[0].image}" alt="artists work">
                            </div>
                        </main>
                        <footer>
                            <div class="ft">
                                <div class="art-details">
                                    <div class="art-dt">
                                        <div class="size">24 000 inches</div>
                                        <div class="price">$75 000</div>
                                    </div>
                                </div>
                                <div class="art-type">
                                    <div class="art-tp">
                                        <p>drawing</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                {/each}

            </div>
        </div>

    </div>
</article>

<style lang="scss">
    .section-two-cards{
        .sts-sect{
            .card-container{
                .cd-cnt{
                    padding: 0.5rem;
                    .card{
                        background: var(--f-pk);
                        margin:1.1rem 0;
                        border-radius: 4px;
                        box-shadow: rgba(0, 0, 0, 0.165) 0 4px 4px 0;
                        .cd{
                            padding: 1rem;
                            header{
                                .hd{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    .artist-profile{
                                        display: flex;
                                        align-items: center;
                                        .ap-img{
                                            box-shadow: rgba(0, 0, 0, 0.27) 0 4px 4px 0;
                                            border-radius: 4px;
                                            margin: 0 1rem;
                                            padding:  0.3rem;
                                            img{
                                                width: 30px;
                                            }
                                        }
                                        .ap-txt{
                                            h1{
                                                @include font(var(--tc), 1.3rem, 600)
                                            }
                                            p{
                                                @include font(var(--tc), 1.15rem, 600)
                                            }
                                        }
                                    }
                                    .artist-link{
                                        .al{
                                            a{
                                                svg{
                                                    width: 40px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            //main{}
                            footer{
                                .ft{
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    .art-details{
                                        .art-dt{
                                            padding: 1rem;
                                            @include font(var(--bl), 1.2rem, 600);
                                        }
                                    }
                                    .art-type{
                                        .art-tp{
                                            @include font(var(--d-pm), 1.2rem, 600);
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
    }

</style>