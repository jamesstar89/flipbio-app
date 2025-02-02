import React from 'react';
import {
  Page,
  DrawerHome,
  Header
} from '../../components';
import GithubImage from '../../assets/github-mark-white.svg';

const LandingPage = () => {

  {/*const getCurateTags = () => {
    const tagEl = [
      'Books', 'Biographies', 'Blurbs', 'Blogs',
      'Stories', 'Writings', 'Geography', 'Mappings',
      'Disasters', 'History', 'Images', 'Post',
      'ExpositorySermonOutlines', 'IndoorExercises', 'Insights', 'Locations',
      'Places', 'Things'
    ];
    return tagEl.map((tag, index) => {
      return <button key={`tag${index}`} className="mb-2">
        <span key={tag} className="opacity-40 border border-[#A9AAC5] text-gray-400 bg-transparent text-sm font-medium me-3 px-2.5 py-1.5 rounded">
          {tag}
        </span>
      </button>
    })
  }*/}

  const getTags = () => {
    const tagEl = [
      'Religion', 'Christianity', 'Bible', 'Faith',
      'Spirituality', 'SacredTexts', 'ChristianLifestyle', 'Ancient',
      'Wisdom', 'Prayer', 'God', 'Jesus',
      'ReligiousStudies', 'Historical', 'Teachings', 'Morality',
      'Divinity', 'Scripture', 'Inspiration'
    ];
    return tagEl.map((tag, index) => {
      return <button key={`tag${index}`} className="mb-2">
        <span key={tag} className="theme-dark:opacity-40 border border-secondary/50 theme-dark:border-[#A9AAC5] text-secondary/50 theme-dark:text-gray-400 bg-transparent text-sm font-medium me-3 px-2.5 py-1.5 rounded">
          {tag}
        </span>
      </button>
    })
  }

  const renderSocialMediaIcons = () => {
    return(<div className="flex items-center justify-center">
      <svg className="opacity-85 w-[40px] h-[40px] text-secondary theme-dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
      </svg>
      <svg className="opacity-85 w-[42px] h-[42px] mr-3 text-secondary theme-dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
      </svg>
      <svg className="opacity-85 w-[42px] h-[42px] mr-3 text-secondary theme-dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
      </svg>
      <svg className="opacity-85 w-[38px] h-[38px] mr-3 text-secondary theme-dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
      </svg>
      <svg className="opacity-85 w-[46px] h-[46px] text-secondary theme-dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
      </svg>
    </div>)
  }

	return (<>
    <Page>
      <DrawerHome />
      <Header useLink="/" invisible />
      <div className="flex items-center justify-center h-full p-5">
        <div className="h-full w-full lg:w-9/12">
          <div className="saira-condensed-extrabold text-[#233ce6] text-7xl sm:text-9xl tracking-tight w-full xl:w-9/12 my-12 lg:mb-0">
            NOT A BLOG, NOT A WEBSITE, NOT YOUTUBE, NOT FACEBOOK.
          </div>
          <div className="hidden lg:flex items-center justify-center h-96 mb-5 text-secondary text-9xl font-extralight">
            Diffrently.
          </div>
          <div className="flex flex-col lg:flex-row mb-10 lg:mb-36">
            <div className="w-full mb-7 lg:w-5/12 lg:mb-0 text-4xl xl:text-5xl text-secondary font-thin">
              <div className="w-10/12 lg:w-8/12 mx-auto leading-loose text-center">
                Write a <span className="border-b border-secondary">book</span> every 5 mins with our AI co-pilot.
              </div>
            </div>
            <div className="w-11/12 lg:w-7/12 mx-auto">
              <div className="border border-gray-800">
                <div>
                  <img src="/wreck-it-ralph.jpg"/>
                </div>
                <div className="pt-12 px-12 pb-24">
                  <div className="text-secondary/90 text-center text-base sm:text-2xl font-extralight mb-8">
                    Chapter 5
                  </div>
                  <div className="text-secondary/90 text-2xl sm:text-4xl font-extralight mb-9">
                    Who Broke The Internet?
                  </div>
                  <div className="text-secondary/90 text-base sm:text-xl font-extralight leading-loose">
                    ... The Internet has been broken for some time. It wasn't just celebrities with outrageous ideas but a series of events that ultimately led to the internet being broken.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center mb-10 text-4xl text-secondary font-sans font-thin">
            <div className="mb-10">
              Power at your fingertips...
            </div>
            <iframe className="w-11/12 h-[300px] sm:h-[450px] xl:w-9/12 xl:h-[550px] mx-auto mb-10 shadow" src="https://www.youtube.com/embed/sT2UDxVLJ4k?si=H78ibRRvivVAc5sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="flex flex-col text-center mb-10 text-4xl text-secondary font-sans font-thin">
            <div className="mb-10">
              Generate images
            </div>
            <div>
              <img className="w-11/12 m-auto" referrerpolicy="no-referrer" src="/moses.png" />
            </div>
          </div>
          <div className="flex flex-col mb-16 text-3xl text-secondary font-sans font-thin">
            <div className="text-center mb-5">
              Generate tags
            </div>
            <div className="w-full sm:w-7/12 mx-auto text-center">
              {getTags()}
            </div>
          </div>
          <div className="flex flex-col mb-16 text-3xl text-secondary font-sans font-thin">
            <div className="mb-5 leading-relaxed text-center">
              Share to popular Social Media platforms
            </div>
            <div>
              {renderSocialMediaIcons()}
            </div>
          </div>
          <div>
            <a href="https://github.com/agilitycycle/Diffrently" target="_blank">
              <div className="mx-auto mb-16 w-[85px]">
                <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path className="opacity-85 fill-secondary theme-dark:fill-gray-400" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                </svg>
                </div>
            </a>
          </div>
          <div className="mb-10 text-center text-base text-secondary theme-dark:text-gray-400 font-sans font-extralight leading-relaxed">
            Want to use Diffrently. commercially, PM james@agilitycycle.com to purchase a one-time commercial license.
          </div>
          <div className="mb-16 text-center text-base text-secondary theme-dark:text-gray-400 font-sans font-extralight leading-relaxed">
            Diffrently. is 99.99% of the time in sync with the cloud database.
          </div>
          <div className="mb-10 text-center text-3xl text-secondary font-sans font-thin">
            Pricing
          </div>
          <div className="mb-18 lg:mb-20">
            <div className="text-center text-secondary text-7xl font-extralight mb-11">
              $25/MO*
            </div>
            <div className="text-secondary theme-dark:text-gray-400 text-base text-center mt-10 mb-10 pb-10 font-sans font-extralight">
              * All benefits incl. AI features.
            </div>
          </div>
          <div className="text-secondary theme-dark:text-gray-400 text-sm text-center mb-10 pb-10 font-sans font-extralight">
            © Copyright Diffrently. All rights reserved.
          </div>
        </div>
      </div>
    </Page>
  </>);
};

export default LandingPage;