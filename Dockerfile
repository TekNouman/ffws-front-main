FROM node:12.13.0 as frontend_builder

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN npm install yarn -g
RUN yarn install

ADD src src
ADD tsconfig.json .
ADD .prettierrc .
ADD .eslintrc.json .
ADD next.config.js .
ADD next-env.d.ts .
ADD .babelrc .

RUN ls -l

RUN yarn build

CMD ["yarn", "start", "-p", "80"]

EXPOSE 80
