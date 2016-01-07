FROM ubuntu:15.04
MAINTAINER Jin Park <jin@jinpark.net>

RUN apt-get update
RUN apt-get install -y build-essential bison make libgdbm-dev ffmpeg ruby-dev nodejs git libgmp3-dev sqlite3 libsqlite3-dev libxml2-dev libxslt-dev zlib1g-dev libssl-dev 
COPY . ./
RUN echo 'install: --no-document\nupdate: --no-document' >> "$HOME/.gemrc"
RUN gem install bundler && bundle install

EXPOSE 9292

CMD bundle exec puma
