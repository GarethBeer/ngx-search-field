# NgxSearchField

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Package description

ngx-search-field is an angular library used to create a reusable material search field with type ahead/autocomplete search functionality and filtering


## Package Usage

- Install using this command: ```npm i ngx-search-field ```

- Import component into required module: ```import { NgxSearchFieldComponent } from 'ngx-search-field'```

- Add in template where needed: ```<lib-ngx-search-field></lib-ngx-search-field>```

- In order to work the component needs an array of data to search,this is added using the arr input property on the component: ```<lib-ngx-search-field [arr]="<INSERT ARRAY HERE"></lib-ngx-search-field>```

*Currently arr excepts array of strings or objects in order to filter*

optional inputs: 
- appearance: ```string``` = defaults to 'outline'. Options: Fill, Outline, Standard and Legacy
- fieldLabel: ```string``` = defaults to 'Search' but any wording can be used
- fieldToDisplay: ```string``` = defaults to empty string. This is used when an array of objects is being searched, it will display the field value in the autocomplete dropdowns


outputs: 
- submitValue: ```any``` = This is the value selected when filtering has been completed




## Code scaffolding

Run `ng generate component component-name --project ngx-search-field` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-search-field`.
> Note: Don't forget to add `--project ngx-search-field` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-search-field` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-search-field`, go to the dist folder `cd dist/ngx-search-field` and run `npm publish`.

## Running unit tests

Run `ng test ngx-search-field` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
