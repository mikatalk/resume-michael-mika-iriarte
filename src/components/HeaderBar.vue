<template>
  <div class="header-bar">


    <a class="logo-box" href="https://www.michael-iriarte.com">
      <img src="./../assets/logo.png" width="30" />
    </a>

    <a class="search-bar" href="https://www.michael-iriarte.com">
      <div class="search-wrapper">
          
        <h1 class="my-name">
            Michael 'Mika' Iriarte
        </h1>
        <div class="side-search-icons-wrapper">
          <div class="cross-icon">
            <span class="cross-icon-inner">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                </path>
              </svg>
            </span>
            <span class="separator"></span>
          </div>
          <div class="search-icon">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="red"></path></svg>
          </div>
        </div>
      </div>
    </a>

    <a class="profile-box" href="https://www.michael-iriarte.com">
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g transform="translate(2, -124)">
          <polygon id="icon-flash" stroke="black" stroke-width="2" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" points="8.43704864 129 16.5 129 12.1914445 134.897572 16.5 134.897572 5.70891466 147 8.43704864 139.133567 4.5 139.133567"></polygon>
        </g>
      </svg>

      <img src="./../assets/head.png" width="30" />
    </a>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderBar extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import "./../styles/variables";

.header-bar {
  padding: 1rem 0 0.5rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-box {
    margin-right: 1rem;
    img {
      box-sizing: border-box;
      width: 45px;
    } 
  }

  .profile-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    // flex-direction: row;
    svg {
      box-sizing: border-box;
      width: 20px;
      margin:1rem;
    } 
    img {
      border-radius: 50%;
      border: 2px solid #f72535;
      box-sizing: border-box;
      width: 40px;
    } 
  }
  
  .search-bar {
    display: flex;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    height: 39px;
    max-width: calc(66% - 2rem);
    text-decoration: none;
    // max-width: calc(100% - 1rem);
    width: 100%;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 1rem auto 1rem 0;
    flex-direction: column;
    .search-wrapper {
      flex: 1;
      display: flex;
      padding: 5px 4px 0 14px;
      flex-wrap: no-wrap;

    
      .my-name {
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        color: rgba(0,0,0,.87);
        word-wrap: break-word;
        outline: none;
        display: flex;
        flex: 100%;
        -webkit-tap-highlight-color: transparent;
        margin: 0;
        height: 34px;
        font: 1.4rem arial,sans-serif;
        line-height: 34px;
        height: 34px !important;
      }
    }
  }
  .side-search-icons-wrapper {
    display: flex;
    flex: 0 0 auto;
    margin-top: -5px;
    align-items: stretch;
    flex-direction: row;

    .search-icon {
      flex: 1 0 auto;
      display: flex;
      cursor: pointer;
      align-items: center;
      border: 0;
      background: transparent;
      outline: none;
      padding: 0 8px;
      width: 24px;
      line-height: 44px;
      svg {
        height: 24px;
        width: 24px;
        vertical-align: middle;
      }
    }
    .cross-icon {
      display: flex;
      flex: 1 0 auto;
      cursor: pointer;
      align-items: center;
      border: 0;
      background: transparent;
      outline: none;
      padding: 0 8px;
      line-height: 44px;
      .separator {
        border-left: 1px solid #dfe1e5;
        height: 65%;
      }
      .cross-icon-inner {
        margin-right: 12px;
        color: #80868b;
        vertical-align: middle;
        outline: none;
          display: inline-block;
          fill: currentColor;
          height: 24px;
          line-height: 24px;
          position: relative;
          width: 24px;
      }
    }
  }
}

@media only screen and (max-width: $max-mobile-size) {
  
  .header-bar {
    justify-content: flex-start;
    .logo-box {
      margin: 0 0.25rem;
      width: 40px;
    }
    .profile-box {
      margin: 0 0.25rem;
      width: 40px;
      svg {
        display: none;
      } 
    }
    .search-bar {
      margin: 0 0.25rem;
      flex: 1;
      max-width: 100%;
      .my-name {
        margin: 0;
        font-size: 1.2rem;
      }
    }
    .side-search-icons-wrapper {
      .search-icon {
        padding: 0 3px;
      }
      .cross-icon {
        padding: 0 3px;
        .cross-icon-inner {
          display: none;
          margin-right: 2px;
        }
      }
    }
  }
}


@media print { 
  .header-bar {
    padding: 1rem 1rem 0.5rem;
    .profile-box {
      svg {
        display: none;
      } 
    }
  }
}
</style>