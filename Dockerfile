FROM ubuntu:15.04
MAINTAINER Jin Park <jin@jinpark.net>

RUN apt-get update
RUN apt-get install -y build-essential bison make libgdbm-dev ffmpeg ruby-dev nodejs git libgmp3-dev sqlite3 libsqlite3-dev libxml2-dev libxslt-dev zlib1g-dev libssl-dev 
RUN mkdir /code
WORKDIR /code
ADD Gemfile /code/Gemfile
ADD Gemfile.lock /code/Gemfile.lock
RUN echo 'install: --no-document\nupdate: --no-document' >> "$HOME/.gemrc"
RUN gem install bundler && bundle install

EXPOSE 9292

# CMD RAILS_ENV=production bundle exec rails s Puma -p 9292 -b 0.0.0.0
CMD bundle exec puma -e production --control tcp://0.0.0.0:9293 --control-token cats
