FROM node:16 as build
# Create app directory
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

# install dependencies
RUN npm install

# Bundle app source
COPY . .

# add environment variables
ENV MY_APP_NAME=myname

# expose port
EXPOSE 3000

CMD [ "npm", "start" ]

# nginx server
FROM nginx

COPY --from=build /app/build /usr/share/nginx/html