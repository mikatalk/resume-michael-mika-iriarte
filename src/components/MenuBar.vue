<template>
  <div class="menu-bar">
   
    <ul>
      <li class="address">
        <svg class="icon" width="16" focusable="false" viewBox="0 0 16 16">
          <path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path>
        </svg>
        4055 Redwood Ave. #313, Los Angeles, CA 90066
      </li>


      <li class="phone">
    <svg class="icon" width="16" focusable="false"  viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      <!-- <path d="M1408 1193q0-11-2-16-3-8-38.5-29.5T1279 1098l-53-29q-5-3-19-13t-25-15-21-5q-18 0-47 32.5t-57 65.5-44 33q-7 0-16.5-3.5T981 1157t-17-9.5-14-8.5q-99-55-170.5-126.5T653 842q-2-3-8.5-14t-9.5-17-6.5-15.5T625 779q0-13 20.5-33.5t45-38.5 45-39.5T756 631q0-10-5-21t-15-25-13-19q-3-6-15-28.5T683 492t-26.5-47.5-25-40.5-16.5-18-16-2q-48 0-101 22-46 21-80 94.5T384 631q0 16 2.5 34t5 30.5 9 33 10 29.5 12.5 33 11 30q60 164 216.5 320.5T971 1358q6 2 30 11t33 12.5 29.5 10 33 9 30.5 5 34 2.5q57 0 130.5-34t94.5-80q22-53 22-101zm256-777v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"/> -->
      <path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T1151 1520t-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5T344 904q-48-77-83-175-3-9-18-49t-20.5-55.5T208 577t-12.5-57.5T192 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/>
    </svg>
    (310) 913-9268 

      </li>

      <li class="email">
    <svg class="icon" width="16" focusable="false"  viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      <path d="M1151 960h316q-1-3-2.5-8t-2.5-8l-212-496H542L330 944q-1 2-2.5 8t-2.5 8h316l95 192h320zm513 30v482q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V990q0-62 25-123l238-552q10-25 36.5-42t52.5-17h832q26 0 52.5 17t36.5 42l238 552q25 61 25 123z"/>
    </svg>
    iriarte.michael@gmail.com

      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MenuBar extends Vue {
}
</script>

<style lang="scss">
@import "./../styles/variables";

.menu-bar {
  background: #ffffff;
  border-bottom: 1px solid #dfe1e5;
  width: 100%;

  ul {
    list-style: none;
    max-width: calc(1000px + 4rem);
    margin: 0 auto 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #5f6368;
      font-weight: 400;
      font-family: Roboto,arial,sans-serif;
      font-size: 1rem;
      margin-right: 20px;
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
  .menu-bar {
    ul {
      padding: 0;
      margin: 1rem 1rem 0.5rem;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        margin: 0.5rem 0;
        font-size: 1.15rem;
        &.address {
          flex: 1 100%;
        }
      }
    }
  }
}
</style>
