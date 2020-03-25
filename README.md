# Web editor for publiccode.yml files
![Build Status](https://img.shields.io/circleci/project/github/italia/publiccode-editor/master.svg) ![Issues](https://img.shields.io/github/issues/italia/publiccode-editor.svg) ![License](https://img.shields.io/github/license/italia/publiccode-editor.svg)

> An editor to generate and validate `publiccode.yml` files

[**Live version at https://publiccode-editor.developers.italia.it**](https://publiccode-editor.developers.italia.it)

---

[Description](#description) • [Usage](#usage) • [Contributing](#contributing)

## Description

This React app generates a valid [`publiccode.yml`](https://github.com/italia/publiccode.yml) file compatible with the latest version of the standard. The file can be copied or downloaded locally and placed at the root of the target repository.

It also validates existing `publiccode.yml` files either by copy and pasting or importing them with the *Load* button. The editor will validate the imported document, helping fix existing issues.


### Usage

You can deploy this application using the official Docker image:

```bash
$ docker run -p 3000:80 italia/publiccode-editor
```

or by building your own:

```bash
$ docker build -t publiccode-editor .
$ docker run -p 3000:80 publiccode-editor
```
and head to `http://localhost:3000`.

Alternatively you can opt for the **`docker-compose`** way.

Just copy `.env-example` to `.env` and set the [environment variables](#environment-variables) to your linking:

```shell
$ cp .env-example .env
$ docker-compose up
```
And point your browser to `http://localhost:8100`.


#### Environment variables

- `ELASTIC_URL`:
Starting from release `1.1`, the Italian Public Administrations Index is fetched from an Elasticsearch instance at the this URL (*default ``https://elasticsearch.developers.italia.it/indicepa_pec/_search`*)
- `VALIDATOR_URL`: The endpoint used to validate the file (*default `https://publiccode-editor.developers.italia.it/validate`*)

## Contributing

Contributions are always welcome!

If you happen to find problems or glitches when using the app or you just want to write a new feature, we warmly encourage you to file an issue using GitHub's issue tracking feature.

Install [yarn](https://yarnpkg.com/lang/en/) if you don't have already installed it.

Clone (or download) the repository:

```shell
$ git clone https://github.com/italia/publiccode-editor.git
```

Then navigate to the freshly downloaded directory and run:

```shell
$ yarn install
```
to install the dependencies.

Now, in order to run the development server locally, you should run:

```shell
$ yarn dev
```
This will expose a webserver reachable at `http://127.0.0.1:3000`.

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for details about how to collaborate in an efficient way with the community. Happy hacking!
