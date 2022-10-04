[www.kcjonesevans.com](www.kcjonesevans.com)
## Personal Website

This is my personal website's repo. I have modified a jekyll theme to suit my needs. 

## Installation

The following are instructions for installing and running this repo locally on a Mac using homebrew

### Brew install Ruby

Follow the homebrew instructions at [jekyllrb.com](https://jekyllrb.com/docs/installation/macos/)

```bash
brew install chruby ruby-install
ruby-install ruby
```

### Install the gems

From the root folder of this repo run the following:

```bash
gem install

# or if using bundle

bundle install
```

### Run a local server

Run a local server at [http://127.0.0.1:4000/](http://127.0.0.1:4000/). This server kind of watches for changes but if you change the config file then you have to restart.

```bash
jekyll serve 
# or if using bundle 
bundle exec jekyll serve 
```
### Deploying to Github Pages

Commit all the generated static files to `main`, github pages takes care of the rest.


## Contributing

Bug reports and pull requests are welcome on GitHub.This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

To submit a pull request -

1. Fork/clone the repository.
2. Develop.
3. Create a new branch from the main branch.
4. Open a pull request on Github describing what was fixed or added.


## License

[MIT License](https://opensource.org/licenses/MIT).
