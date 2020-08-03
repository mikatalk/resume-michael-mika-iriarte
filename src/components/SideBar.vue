
<template>
  <div class="side-bar">

    <div class="side-bar-wrapper">
      <h2 class="section-title">Skills</h2>
      <div v-for="(skillCategory, categoryIndex) of skills" :key="categoryIndex">
        <h3 class="list-category">{{skillCategory.name}}</h3>
        <ul class="list-items">
          <li v-for="(skillName, skillIndex) of skillCategory.skills" :key="skillIndex" class="tag">
            {{skillName}}
          </li>
        </ul>
      </div>
    </div>
 
    <div class="side-bar-wrapper">
      <h2 class="section-title">Education</h2>
      <div v-for="(itemEducation, index) of education" :key="index">
        <h3 class="list-category">{{itemEducation.name}}</h3>
        <p class="list-text">
          {{itemEducation.text}}
        </p>
        <p class="list-text-dates">
          {{itemEducation.dates}}
        </p>
      </div>
    </div>

    <div class="side-bar-wrapper">
      <h2 class="section-title">Languages</h2>
      <div class="in-row">
        <div v-for="(language, index) of languages" :key="index">
          <h3 class="list-category">{{language.name}}</h3>
          <p class="list-text">
            {{language.text}}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Language, Education, Skill } from './../constants/types';
import { languages } from './../constants/languages';
import { education } from './../constants/education';
import { skills } from './../constants/skills';

@Component({})
export default class SideBar extends Vue {

  languages : Language[] = languages;
  
  education : Education[] = education;

  skills : Skill[] = skills;
}
</script>

<style lang="scss">
@import "./../styles/variables";

.side-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  // .social-bar {
  //   margin: 1rem 0 0 0;
  //   border: 1px solid #dfe1e5;
  //   padding: 0.5rem 0;
  //   border-radius: 20px;
  //   box-sizing: border-box;

  // }
  .side-bar-wrapper {
    margin: 1rem 0 0 0;
    border: 1px solid #dfe1e5;
    padding: 0.5rem 1rem 2rem;
    border-radius: 1.4rem;
    .section-title {
      color: #222;
      font-size: 1.4rem;
      line-height: 1.3;
      font-family: Roboto,arial,sans-serif;
    }

    .tag {
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    .in-row {
      display: flex;
      justify-content: flex-start;
      margin-left: -1rem;
      & > div {
        margin: 0 1rem;
        h3 {
          margin: 0;
          font-family: Roboto,arial,sans-serif;
        }
      }
    }
    
    .list-category {
      font-family: Roboto,arial,sans-serif;
      color: #202124;
      padding-top: 1px;
      line-height: 1.3;
      font-style: normal;
      font-weight: normal;
      margin: 1rem 0 0;
      font-size: 1.2rem;
      line-height: 1.375;
      color: #1a0dab;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }

    p.list-text-dates {
      font-family: Roboto,arial,sans-serif;
      margin: 0;
      font-style: normal;
      color: #70757a;
      line-height: 1.58;
      font-size: 1rem;
      font-weight: 400;
      text-align: left;
    }
    p.list-text {
      margin: 0;
      font-size: 1.1rem;
    }

    ul.list-items {
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      // justify-content: space-between;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 -0.1rem;
      li {
        color: #222325;
        font-size: 12px;
        text-align: left;
        font-weight: 400;
        line-height: 1.58;
        font-style: normal;
        border-radius: 8px;
        margin: 0.15rem 0.1rem;
        padding: 0 0.75rem;
        flex: 1 auto;
        text-align: center;
        line-height: 18px;
        box-sizing: content-box;
        font-variant: all-petite-caps;
        cursor: pointer;
        transition: all ease-in-out 450ms 120ms;
        border: 1px solid #dfe1e5;
        background: #ffffff;
        &:hover {
          background: #f2f2f2;
          border: 1px solid #e4e4e4;
          transition: all ease-in-out 250ms;
        }
      }
    }
  }
}


@media only screen and (max-width: $max-mobile-size) {
  .side-bar {
    // flex-direction: column-reverse;
  }
}
</style>
