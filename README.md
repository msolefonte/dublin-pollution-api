[![License](https://img.shields.io/github/license/msolefonte/dublin-pollution-api)](https://github.com/msolefonte/dublin-pollution-api/blob/main/LICENSE)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/msolefonte/dublin-pollution-api/CONTRIBUTING.md)

# Dublin NO<sub>2</sub> Pollution API

Open Source application that gives access to real-time data about traffic and Nitrogen Dioxide pollution around Dublin, 
Ireland. To be used together with Dublin Pollution Piper.

## Configuration

In order to use the application, some previous configuration has to be done. It includes both creation and configuration
of prerequisites and tuning of the main configuration file.

### Prerequisites

This application uses a MySQL database to store the data collected, and it has to be configured for that use. Read more 
about database configuration in 
[the dedicated document](https://github.com/msolefonte/dublin-pollution-piper/blob/main/docs/database.md).

## Scripts

### Installation

```bash
npm install
```

### Testing

```bash
npm run test:coverage
```

### Build

```bash
npm run build
```

## Execution

```bash
npm run start
```

## Contributing

Feel free to add issues or to create pull requests. Help is always welcome.

## Versioning

[SemVer](http://semver.org/) is used for versioning. For the changelog, see [CHANGELOG.md](CHANGELOG.md). 

## Authors

* **Marc Solé Fonte** - *Initial work* - [msolefonte](https://github.com/msolefonte)

## License

This project is licensed under the Apache License, Version 3.0 - see the [LICENSE](LICENSE) file for details.
