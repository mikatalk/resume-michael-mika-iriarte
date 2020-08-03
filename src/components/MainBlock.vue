<template>
  <div class="main-block">
    <p class="breadcrumb">Building results for the Web since 2008<span class="nerdy-text"> ({{secondsCount}} seconds)</span>.</p>
    
    <p class="section-suggestion">Did you mean: <span class="highlighted" @click="suggestionIndex = (suggestionIndex+ 1)%suggestions.length">{{didYouMean}}</span></p>
    
    <h2 class="section-title">Experience</h2>
    
    <ul class="experience-list">
      <li v-for="(experience, index) of experiences" :key="index">
        <div class="company-name"><cite>{{experience['company-name']}}</cite></div>
        <div class="job-title"><cite>{{experience['job-title']}}</cite></div>
        <p class="role-description" v-html="experience['role-description']"></p>
        <p class="gig-duration" v-html="experience['gig-duration']"></p>
        <ul class="experience-sections-list experience-list">
          <li v-for="(experienceSection, sectionIndex) of experience.sections" :key="sectionIndex">
            <div class="job-title"><cite>{{experienceSection.name}}</cite></div>
            <p class="role-description" v-html="experienceSection.text"></p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Experience } from './../constants/types';
import { suggestions } from './../constants/suggestions';
import { experiences } from './../constants/experiences';
@Component
export default class MainBlock extends Vue {
  secondsCount = ((Math.abs(new Date().getTime() - new Date('2004/10/10 13:13:13').getTime())) / 1000).toLocaleString();

  suggestions: string[] = suggestions; // .sort(() => Math.random() - 0.5);
  
  suggestionIndex: number = 0; // Math.round(Math.random() * suggestions.length) % suggestions.length;

  experiences : Experience[] = experiences;

  get didYouMean () {
    return this.suggestions[this.suggestionIndex];
  }
}
</script>

<style lang="scss">
@import "./../styles/variables";

.main-block {
  position: relative;
  .breadcrumb {
    color: #70757a;
    font-size: 14px;
    font-weight: 400;
  }

  .section-title {
    color: #222;
    font-size: 1.4rem;
    line-height: 1.3;
    font-family: Roboto, arial, sans-serif;
  }

  .experience-list {
    padding: 0;
    margin: 0;
    margin-right: 2rem;
    list-style: none;
    &.experience-sections-list {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      display: flex;
      margin: 0;
      li {
        flex: 1 calc(50% - 2rem);
        margin: 0.5rem 0 0 2rem;
      }
    }
    li {
      margin: 2rem 0;
      .company-name cite  {
        font-family: Roboto,arial,sans-serif;
        color: #202124;
        font-size: 14px;
        padding-top: 1px;
        line-height: 1.3;
        font-style: normal;
      }
      .job-title cite {
        font-family: Roboto,arial,sans-serif;
        color: #1a0dab;
        font-size: 1.4rem;
        font-weight:400;
        line-height: 1.3;
        padding-top: 4px;
        margin: 0;
        margin-bottom: 3px;
        font-style: normal;
      }
      .role-description {
        font-family: Roboto,arial,sans-serif;
        margin: 0;
        color: #4d5156;
        font-size: 14px;
        text-align: left;
        font-weight: 400;
        line-height: 1.58;
        font-style: normal;
      }
      .gig-duration {
        font-family: Roboto,arial,sans-serif;
        margin: 0;
        font-style: normal;
        color: #70757a;
        line-height: 1.58;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
      }
    }
  }

  .section-suggestion {
    font-family: Roboto,arial,sans-serif;
    color: #ca2a17;
    font-size: 18px;
    font-weight: 400;
    span.highlighted {
      color: #1a0dab;
      font-size: 18px;
      cursor: pointer;
      font-style: italic;
      font-weight: bold;
    }
  }
}


@media only screen and (max-width: $max-mobile-size) {
  .main-block {
    .breadcrumb {
      .nerdy-text {
        display: none;
      }
    }
    .section-title {
    }
    .experience-list {
      margin-right: 0rem;
      &.experience-sections-list {
        flex-direction: column;
        justify-content: flex-start;
        li {
          flex: 1;
          margin: 0.5rem 0 0 2rem;
        }
      }
    }
  }
}


@media print { 
 .main-block {
    .section-suggestion {
      display: none;
    }
  }
}
</style>
