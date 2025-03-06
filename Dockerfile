FROM node:13 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# FROM node:13
# WORKDIR /app
# COPY --from=build /root/.local /root/.local
# ENV PATH=/root/.local/bin:$PATH
CMD ["npm","start"]
