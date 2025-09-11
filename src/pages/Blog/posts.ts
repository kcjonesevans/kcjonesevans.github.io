// filepath: src/pages/Blog/posts.ts
import type { Post } from '../../models/post';

export const posts: Post[] = [
  {
    title: 'Language translation of web-based content',
    date: '2012-08-01',
    description: 'Machine Translation (MT) software today provides adequate conversion of foreign languages to one\'s native tongue; however, dialects, slang, and character conversion errors result in partially successful translations.',
  img: 'src/assets/img/software.jpg',
    tags: ['Machine Translation (MT)', 'Cross-Language Information Retrieval (CLIR)', 'Computer-Aided Translation (CAT)', 'International Organization for Standardization (ISO)'],
    url: 'http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6531026&queryText%3DBrian+Bacher+.PLS.+K.C.+Jones+.PLS.+Bart+Kahler',
    content: `Machine Translation (MT) software today provides adequate conversion of foreign languages to one's native tongue; however, dialects, slang, and character conversion errors result in partially successful translations. For an accurate translation, a native speaker is often required to correct the translation by using sentence structure and word use cues to capture the true meaning. MT character conversion from Cyrillic, Asian, and Arabic languages to western characters induce errors in the translated text which can change the meaning or result in characters being associated together that do not form words. The authors present a solution using open source MT and the International Organization for Standardization (ISO) character mapping. The solution provides proper character conversion to achieve greater translation accuracy for web-based content.`
  },
  {
    title: 'Web-based Geospatial Information Extraction',
    date: '2012-08-01',
    description: 'The quantity of information publicly available on the World Wide Web today is enormous and continuously growing. Individual tools available for information retrieval and data mining are capable of extracting data based on search criteria but place a cognitive burden on the user to sift through the search results to find the information of interest.',
  img: 'src/assets/img/how-to-start.jpg',
    tags: ['Geospatial', 'Information Retrieval', 'Open Source', 'Language Translation', 'Data Mining'],
    url: 'https://ieeexplore.ieee.org/document/6531027?tp=&arnumber=6531027&queryText%3DBrian%20Bacher%20.PLS.%20K.C.%20Jones%20.PLS.%20Bart%20Kahler=',
    content: `The quantity of information publicly available on the World Wide Web today is enormous and continuously growing. Individual tools available for information retrieval and data mining are capable of extracting data based on search criteria but place a cognitive burden on the user to sift through the search results to find the information of interest. The dynamic nature of web-based information requires frequent searches to ensure that new information is not missed. Since public information is published on the web in many languages, translation into a common language is necessary to ensure that relevant data is not left out of a search. The authors discuss development of a programmatic method of collecting, analyzing and categorizing multi-lingual open source data. The discussed approach is designed to provide greater efficiency in public data searches and analysis by focusing on geospatial capabilities, visualizations, and the correlation of disparate pieces of information.`
  },
  {
    title: 'Automating File Transfer from FTP Server to AWS S3 Bucket Using Terraform',
    date: '2021-03-22',
    description: 'The client has files placed in a common folder that can be accessed by the standard File Transfer Protocol (FTP). Given the FTP server’s connection information, the client requested the files to be moved to an Amazon Web Services (AWS) S3 bucket where their analysis tools are configured to use.',
  img: 'src/assets/img/aws-s3.png',
    tags: ['AWS', 'FTP', 's3', 'terraform', 'EC2', 'Programming', 'Learn'],
    url: 'https://www.ais.com/automating-file-transfer-from-ftp-server-to-aws-s3-bucket-using-terraform/',
    content: `The client has files placed in a common folder that can be accessed by the standard File Transfer Protocol (FTP). Given the FTP server’s connection information, the client requested the files to be moved to an Amazon Web Services (AWS) S3 bucket where their analysis tools are configured to use.`
  },
  {
    title: 'Build and Deploy Angular Applications Using Azure DevOps Pipelines',
    date: '2022-05-24',
    description: 'Automating the build and deployment of an Angular application in the Azure DevOps (AzDO) ecosystem is as easy as any other code hosting service. AzDO has added task types to help deploy directly to Azure subscriptions.',
  img: 'src/assets/img/angular.svg',
    tags: ['Angular', 'Azure', 'Devops', 'pipelines', 'Software'],
    url: 'https://www.ais.com/build-and-deploy-angular-applications-using-azure-devops-pipelines/',
    content: `Automating the build and deployment of an Angular application in the Azure DevOps (AzDO) ecosystem is as easy as any other code hosting service. AzDO has added task types to help deploy directly to Azure subscriptions. In this post, we will look at creating a build pipeline with caching, discuss deploying to Azure App Service, and pushing a container to the Azure Container Registry for use in AKS.`
  },
  {
    title: 'Resume',
    date: '2022-10-04',
    description: 'My resume.',
  img: 'src/assets/img/coffee-shop.jpg',
    tags: ['resume', 'work', 'career'],
    url: '/resume',
    content: `# Experience\n## Applied Information Sciences\n### Solutions Advisor, Software Engineer, UX Engineer\n#### March 2016 - Present\nLeading user experience engineering, developing and designing web applications with Angular, React/Redux and Node.\n## Riverside Research\n###  Software Developer\n#### September 2013 - February 2016\nDeveloped interactive dynamic web pages using Jquery, Perl, and an Oracle DB. Researched development issues, provided multiple solutions and implemented a solution in a team. Maintained metrics and statics of an Oracle DB.\n## Science Applications International Corporation\n###  Software Engineer\n#### September 2010 - September 2013\nSupport Small Business Innovation Research (SBIR) program and other various programs needing software design and engineering. Leading and creating a  Python/Django application that uses entity , temporal , and geospatial extraction of web based media\n## Wright State University College of Engineering\n###  Programming Assistant and Teacher's Assistant\n#### April 2009 - October 2010\nTeaching assistant for operating systems class covering file-system usage and design, process usage and control, virtual memory, multi user systems, access control. Provide assistance to Computer Science and Engineering students in Java & C/C++ introduction and intermediate level classes with debugging and solving issues with labs and projects.\n## Wright State University College of Math and Science\n###  Developmental Math 095 Proctor\n#### September 2008 - March 2010\nTaught developmental algebra and pre-algebra concepts to college students.\n## The Reynolds and Reynolds Company\n###  Web Developer Intern\n#### Summer 2009\nInternship as a Web Developer for Reynolds and Reynold's Marketing Department.\n# Skills:\n* JavaScript\n* React and Redux`
  }
];
