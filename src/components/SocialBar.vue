<template>
  <div class="social-bar">
    <div class="social-bar-inner">
        
      <ul>
      
        <li class="portfolio">
      <svg class="icon" focusable="false"  viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2, -124)">
          <polygon id="icon-flash" stroke="none" stroke-width="0" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" points="8.43704864 129 16.5 129 12.1914445 134.897572 16.5 134.897572 5.70891466 147 8.43704864 139.133567 4.5 139.133567"></polygon>
        </g>
      </svg>
      michael-iriarte.com 

        </li>
      
        <li class="linkedin">
      <svg class="icon" focusable="false"  viewBox="0 0 1792 1792" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M365 1414h231V720H365v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5T479 626h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2V720H723q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"/>
      </svg>
      LinkedIn 

        </li>


        <li class="twitter">
      <svg class="icon" focusable="false"  viewBox="0 0 1792 1792" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M1408 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5T883 722q0 29 5 48-129-7-242-65T454 550q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162T1304 746q0-18-1-27 63-45 105-109zm256-194v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"/>
      </svg>
      Twitter 

        </li>

        <li class="stack-overflow">
          <svg class="icon" focusable="false"  viewBox="0 0 1792 1792" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M1417 1632H299v-480H139v640h1438v-640h-160v480zm-942-524l33-157 783 165-33 156zm103-374l67-146 725 339-67 145zm201-356l102-123 614 513-102 123zM1176 0l477 641-128 96-477-641zM458 1471v-159h800v159H458z"/>
          </svg>
          StackOverflow 
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SocialBar extends Vue {
}
</script>

<style lang="scss">
@import "./../styles/variables";

.social-bar {
  width: 100%;
  margin: 0;
  background: #f2f2f2;
  line-height: 40px;
  border-top: 1px solid #e4e4e4;
  position: relative;

  &-inner {
    width: 100%;
    max-width: 1010px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding: 0.5rem 0;
    max-width: 670px;
    margin: 0rem auto 0rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #5f6368;
      font-weight: 400;
      font-family: Roboto,arial,sans-serif;
      font-size: 1rem;
      font-variant: all-petite-caps;
      .icon {
        margin-right: 5px;
        width: 16px;
        * {
          fill: rgba(#5f6368, 1);
        }
      }
    }
  }
}

@media only screen and (max-width: $max-mobile-size) {
  .social-bar {
    ul {
      padding: 0.5rem 1rem;
      li {
        &.stack-overflow {
          display: none;
        }
      }
    }
  }
}

@media print { 
 .social-bar {
    ul {
      justify-content: center;
      li {
        &.linkedin,
        &.twitter,
        &.stack-overflow {
          display: none;
        }
      }
    }
  }
}
</style>
