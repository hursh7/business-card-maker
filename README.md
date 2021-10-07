# Cardmaker

사용자의 정보를 실시간으로 업데이트 할 수 있는 반응형 명함 어플리케이션입니다.  
페이지 링크: [**https://hursh7.github.io/business-card-maker/**](https://hursh7.github.io/business-card-maker/)

## Preview
<img src="https://user-images.githubusercontent.com/48500615/136408994-127f41a6-77bd-4cad-abde-8a3213515af7.png" width="100%" alt="프로젝트 미리보기" />

## Table of Contents
1. [About the Project](#About-the-Project)
2. [Tech Stack](#Tech-Stack)
3. [Structure](#Structure) 
4. [Functions](#Structure) 

***  
### About the Project  
* ```React``` 의 **HOOKS** 방식을 사용하여 개발한 웹 어플리케이션.  
* ```React Router``` 학습.  
* ```Firebase``` 의 **Auth** API를 통해 소셜 미디어 로그인을 구현하고, **Real Time Database**를 이용해 사용자 정보를 실시간으로 연동하는 명함 앱.  
* ```Cloudinary``` 로 이미지 업로드 기능 구현.

### Tech Stack  
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" alt="JavaScript" /> <img src="https://img.shields.io/badge/PostCss-DD3A0A?style=flat-square&logo=PostCss&logoColor=white" alt="postCss" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="React" /> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white" alt="React Router" /> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white" alt="Firebase" /> <img src="https://img.shields.io/badge/Cloudinary-4285F4?style=flat-square&logo=Google Cloud&logoColor=white" alt="Cloudinary" />  

### Structure
<img src="https://user-images.githubusercontent.com/48500615/135578206-c19b41bd-7cef-49d9-a4cc-fe629a3bc1e3.png" width="85%" alt="프로젝트 구조" />

### Functions
* service 패널에 **Firebase** 관련 기능들(소셜 미디어 인증, 명함 추가/제거/업데이트, 명함 이미지 업로드 등..)을 분리하고 **App 컴포넌트**에 *Props*로 전달.  
* App 컴포넌트에서 ```React Router``` 이용해, **Login** 과 **Maker 컴포넌트** 경로 설정.  
* 로그인 화면에서 **소셜 미디어 로그인** *(Facebook은 SSL 보안서버 인증서 문제로 비활성화)* 완료 후, 명함 제작 페이지로 진입.
<img src="https://user-images.githubusercontent.com/48500615/136397308-7ad1439f-d3cb-40a0-93ef-bc26c670a94e.gif" width="90%" alt="로그인 화면" />

* 명함 제작 페이지의 **Editor 영역**에서 명함(card)을 추가/제거/업데이트 할 수 있다. (이미지도 업로드 가능하다.)
<img src="https://user-images.githubusercontent.com/48500615/136398506-c9c3b3c6-8dbf-4ab0-824d-6c65ec7dbc08.gif" width="90%" alt="명함 에디터" />

* 완성된 명함은 **Preview 영역**에 생성되고, ```Firebase```의 **Real Time Database** 연동을 통해 실시간으로 명함 정보를 수정할 수 있다.
<img src="https://user-images.githubusercontent.com/48500615/136399757-cad63213-cce4-4731-8521-4bfcc3666a1e.gif" width="90%" alt="명함 편집" />

* 헤더 부분의 로그아웃 버튼을 누르면 로그인 화면으로 돌아간다. (로그아웃 되어도 생성된 명함 정보는 그대로 유지된다.)
<img src="https://user-images.githubusercontent.com/48500615/136401001-f8b72205-3537-4f14-a8d6-39baeea6d9da.gif" width="90%" alt="로그아웃" />       





