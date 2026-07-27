# Contoso - BPS Logic Builder Angular Sample

This project demonstrates how Angular can be used to create a dynamic, data-driven application where screens and workflows are defined using **BPS Logic Builder** rather than hardcoded in the Angular application. The application dynamically generates UI components, forms, grids, and navigation based on configuration received from backend APIs.

## Overview

Instead of building separate Angular components for each CRUD operation or screen, this application uses a set of **generic, reusable components** that render themselves based on metadata and settings provided by the BPS Logic Builder workflow engine. This approach enables business logic and screen definitions to be managed outside the Angular codebase, allowing for rapid changes without redeploying the frontend.

## Architecture

### Core Services

The application communicates with three separate API endpoints (configured in `UrlsService`):

1. **Workflow API** (`WORKFLOW_URL`) - Managed by `SettingsService`
   - Controls application flow and navigation
   - Returns `IFlowSettings` with screen configuration, navigation bar, and flow state
   - Endpoints: `/api/flow/Start`, `/api/flow/NavStart`, `/api/flow/Next`, `/api/flow/GetSelector`

2. **CRUD API** (`CRUD_URL`) - Managed by `GenericService`
   - Handles Create, Read, Update, Delete operations for entities
   - Provides data for forms and detail views
   - Endpoints include: Get Item, Get List, Insert Item, Update Item, Delete Item

3. **Grid API** (`GRID_URL`) - Managed by `GridService`
   - Provides data for Kendo UI grids with filtering, sorting, and pagination
   - Returns data in format compatible with Kendo DataSource
   - Supports OData-style queries via `toDataSourceRequest`

### Generic Components

The application includes reusable generic components that adapt to different data types and configurations:

- **GenericCreateComponent** - Dynamically generates create forms
- **GenericEditComponent** - Dynamically generates edit forms
- **GenericDetailComponent** - Displays entity details in read-only mode
- **GenericDeleteComponent** - Handles entity deletion with confirmation
- **GenericGridComponent** - Renders sortable, filterable data grids using Kendo UI Grid
- **GenericListComponent** - Displays list views of entities
- **FormFieldDropdownComponent** / **FormFieldMultiselectComponent** - Dynamic form controls
- **GridColumnDropdownFilterComponent** / **GridColumnMultiselectFilterComponent** - Dynamic grid filters

### Flow Management

The `IFlowState` interface tracks the user's journey through the application:
- Current driver and selection
- Module stack for nested workflows
- Module begin/end tracking

The `ScreenHostComponent` subscribes to screen settings changes and dynamically renders the appropriate generic component based on the `ViewType` returned from the workflow API.

## Technology Stack

- **Angular** (version 21.x)
- **Kendo UI for Angular** - Grid, dropdowns, date pickers, and other UI components
- **Bootstrap 5** & **Font Awesome** - Styling and icons
- **RxJS** - Reactive programming for HTTP operations
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend APIs running for Workflow, CRUD, and Grid endpoints

### Configuration

Configure the backend API endpoints in `src/assets/env.json`:

```json
{
  "ENVIRONMENT_NAME": "Development",
  "CRUD_URL": "http://localhost:5000",
  "GRID_URL": "http://localhost:5001",
  "WORKFLOW_URL": "http://localhost:5002"
}
```

### Development Server

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4203/`. The app will automatically reload when you change source files.

### Build

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

Execute unit tests via Karma:

```bash
npm test
```

Execute end-to-end tests via Protractor:

```bash
npm run e2e
```

## Key Features

- **Dynamic Screen Generation** - Screens are defined in BPS Logic Builder and rendered dynamically
- **Generic Components** - Reusable components adapt to different entity types and configurations
- **Workflow-Driven Navigation** - Navigation and flow controlled by backend workflow engine
- **Separation of Concerns** - Business logic and screen definitions managed separately from UI code
- **Type-Safe Development** - TypeScript interfaces for all data structures and API responses
- **Responsive UI** - Bootstrap-based responsive design with Kendo UI components

## Project Structure

```
src/app/
├── common/          # Shared services (date, validation, notifications, etc.)
├── generic/         # Generic reusable components for dynamic rendering
├── http/            # API services (SettingsService, GenericService, GridService)
├── nav-bar/         # Navigation bar component
├── screen-host/     # Host component that renders appropriate generic component
├── stuctures/       # TypeScript interfaces and data models
│   ├── screens/     # Screen-related interfaces
│   └── requests/    # Request DTOs
└── environments/    # Environment configurations
```

## Further Help

For more information on:
- **Angular CLI**: Run `ng help` or visit the [Angular CLI documentation](https://github.com/angular/angular-cli)
- **BPS Logic Builder**: Consult the BPS Logic Builder documentation for creating and managing workflows
- **Kendo UI**: Visit [Telerik Kendo UI for Angular documentation](https://www.telerik.com/kendo-angular-ui/components/)
