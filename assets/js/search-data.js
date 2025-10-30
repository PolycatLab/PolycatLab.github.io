// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-members",
          title: "Members",
          description: "Our current team and former members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of our ongoing projects...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "All peer-reviewed publications from Charles Romain (reversed chronological order). Publications before 2016 are from PhD (Strasbourg, France) and post-doctoral work (London, UK).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Some GitHub repositories, from us, from our collaborators, or just useful git",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Supplementary materials for some courses taught by Charles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-opportunity",
          title: "Opportunity",
          description: "To join our group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunity/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-have-a-new-website-sparkles",
          title: 'We have a new website! :sparkles:',
          description: "",
          section: "News",},{id: "news-last-days-for-thibault-in-the-lab-sad-to-see-leaving-thanks-for-your-hard-work-and-good-luck-with-your-report-and-viva",
          title: 'Last days for Thibault in the lab. Sad to see leaving. Thanks for...',
          description: "",
          section: "News",},{id: "projects-monomer-design",
          title: 'Monomer design',
          description: "Hybrid and low Tc monomers (coming soon)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-al-catam",
          title: 'Al-Catam',
          description: "Our family of Aluminium catam catalysts for ROP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-nci",
          title: 'NCI',
          description: "Exploiting Non-Covalent Interactions (NCI) in polymerisation catalysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-metal-metal-cooperativity",
          title: 'Metal-Metal cooperativity',
          description: "Boosting Ti-salen catalyst activity with a pinch of silver salt",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-chemical-recycling",
          title: 'Chemical Recycling',
          description: "TROPIC - a thermodynamic database for ROP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-fair-nmr-data",
          title: 'FAIR NMR Data',
          description: "Workflow for NMR data publication",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-champ",
          title: 'CHAMP',
          description: "A platform for using HPC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63.%72%6F%6D%61%69%6E@%69%6D%70%65%72%69%61%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/PolycatLab", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1851-8612", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=M4LmXVwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
