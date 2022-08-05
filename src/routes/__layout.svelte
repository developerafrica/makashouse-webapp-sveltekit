<script>
  import "../app.css";
  import "../app.scss";
  import { browser } from "$app/env";

  import {config_stores} from "../stores/config_stores";
  let dark = $config_stores.dark
  if (browser && dark) {
    document.querySelector("body").classList.toggle("dark")    
    console.log(dark)
  }


</script>



<div class="layout-main">
  <div class="lmn">
    <header></header>
    <main>
      <slot />
    </main>
    <nav>
      <div class="navigation">
        <ul class="flex-auto flex items-center">
          <div class="left-navigation">
            <li>
              <a href="/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 14C15 12.3333 13.6667 11 12 11C10.3333 11 9 12.3333 9 14V19H7C5.77193 19 5 18.2281 5 17V11.2456C5 10.6316 5.15789 10.2456 5.57895 9.82456L10.5789 4.82456C11.4737 3.94737 12.5263 3.94737 13.4211 4.82456L18.4211 9.82456C18.8421 10.2456 19 10.6316 19 11.2456V17C19 18.2281 18.2281 19 17 19H15V14ZM13 14V21H17C19.2105 21 21 19.2105 21 17V11.2456C21 10.1754 20.5789 9.15789 19.8246 8.42105L14.8246 3.42105C13.2632 1.84211 10.7368 1.84211 9.17544 3.42105L4.17544 8.42105C3.42105 9.15789 3 10.1754 3 11.2456V17C3 19.2105 4.78947 21 7 21H11V14C11 13.3158 11.3158 13 12 13C12.6842 13 13 13.3158 13 14ZM14 19H10V21H14V19Z" fill="#333333"/>
                  </svg>
                </a>                
            </li>
            <li>
              <a href="/pages/config">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5C4.45614 11 4 11.4561 4 12C4 12.5439 4.45614 13 5 13H19C19.5439 13 20 12.5439 20 12C20 11.4561 19.5439 11 19 11ZM16.7719 6.36842C15.5789 4.92982 13.8772 4 12 4C9.2807 4 7 5.96491 7 8.49123C7 9.03509 7.45614 9.49123 8 9.49123C8.54386 9.49123 9 9.03509 9 8.49123C9 7.01754 10.1579 6 12 6C13.3158 6 14.3333 6.5614 15.2281 7.63158C15.4211 7.85965 15.6842 8 16 8C16.5439 8 17 7.54386 17 7C17 6.75439 16.9123 6.54386 16.7719 6.36842ZM15 15.4912C15 16.9825 13.8421 18 12 18C10.6842 18 9.66667 17.4386 8.77193 16.3684C8.57895 16.1404 8.31579 16 8 16C7.45614 16 7 16.4561 7 17C7 17.2456 7.08772 17.4561 7.22807 17.6316C8.42105 19.0702 10.1228 20 12 20C14.7193 20 17 18.0351 17 15.4912C17 14.9474 16.5439 14.4912 16 14.4912C15.4561 14.4912 15 14.9474 15 15.4912Z" fill="#333333"/>
                  </svg>              
              </a>
                
            </li>
            <li>
              <a href="/pages/upload">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H13V4C13 3.45614 12.5439 3 12 3C11.4561 3 11 3.45614 11 4V13H20C20.5439 13 21 12.5439 21 12C21 11.4561 20.5439 11 20 11ZM4 13H11V20C11 20.5439 11.4561 21 12 21C12.5439 21 13 20.5439 13 20V11H4C3.45614 11 3 11.4561 3 12C3 12.5439 3.45614 13 4 13Z" fill="#333333"/>
                  </svg>            
              
              </a>

                
            </li>
          </div>
          <div class="right-navigation">
            <li>
              <a href="pages/cart">              
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_51_141)">
                  <rect x="4" width="46" height="46" rx="23" fill="#E69C31" shape-rendering="crispEdges"/>
                  </g>
                  <path d="M21 16C21 13.7895 19.2105 12 17 12C16.4561 12 16 12.4561 16 13C16 13.5439 16.4561 14 17 14C18.2281 14 19 14.7719 19 16C19 16.5439 19.4561 17 20 17C20.5439 17 21 16.5439 21 16ZM32.4035 17C33.807 17 34.614 17.9825 34.3684 19.3684L33.4737 24.3684C33.2807 25.4211 32.5789 26 31.4912 26H23C21.7719 26 21 25.2281 21 24V17H32.4035ZM32.4035 15H19V24C19 26.2105 20.7895 28 23 28H31.4912C33.4211 28 35.0877 26.614 35.4386 24.7193L36.3333 19.7193C36.7719 17.2632 34.9123 15 32.4035 15ZM32 29C30.8947 29 30 29.8947 30 31C30 32.1053 30.8947 33 32 33C33.1053 33 34 32.1053 34 31C34 29.8947 33.1053 29 32 29ZM22 29C20.8947 29 20 29.8947 20 31C20 32.1053 20.8947 33 22 33C23.1053 33 24 32.1053 24 31C24 29.8947 23.1053 29 22 29Z" fill="#333333"/>
                  <defs>
                  <filter id="filter0_d_51_141" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_141"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_141" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
              </a>
                
            </li>
          </div>
        </ul>
      </div>
      <div class="bottom">
        <svg width="125" height="4" viewBox="0 0 125 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="125" height="4" fill="#E69C31"/>
          </svg>
          
      </div>
    </nav>
  </div>
</div>
<style lang="scss">
  .layout-main{
    .lmn{
      nav{
        position: fixed;
        left:0;
        bottom:0;
        width: 100%;
        z-index: var(--z3);
        .navigation{
          ul{
            padding: 1rem 0.5rem;
            .left-navigation{
              background: var(--l-pm);
              margin: 0 4px;
              flex: 1;
              display: flex;
              justify-content: space-between;
              border-radius: 5px;
              padding: 0.2rem;
              li{
                a{
                  border-radius: 4rem;
                  display: block;
                  width: 100%;
                  height: auto;
                  padding: 1rem;
                }

              }
            }
            .right-navigation{
              margin: 0 10px;

            }
          }
        }
        .bottom{
          display: flex;
          justify-content: center;
          padding: 4px;
        }
      }
    }
  }
</style>