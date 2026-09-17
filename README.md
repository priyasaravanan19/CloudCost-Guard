# ☁️ CloudCost Guard

## Full-Stack Cloud Cost Monitoring & Optimization Platform

CloudCost Guard is a full-stack cloud cost monitoring and optimization platform designed to help organizations **track cloud spending, analyze resource usage, detect cost anomalies, identify unused resources, and discover opportunities to reduce unnecessary cloud expenses**.

The platform provides a centralized dashboard where users can monitor cloud infrastructure costs, understand spending patterns, receive alerts, and identify potential cost-saving opportunities.

CloudCost Guard is designed with an extensible architecture that can integrate with major cloud providers such as **AWS, Microsoft Azure, and Google Cloud Platform (GCP)**.

---

## 🚀 Features

### 📊 Cloud Cost Dashboard

The dashboard provides a centralized overview of cloud spending and infrastructure usage.

* Total cloud spending
* Monthly spending
* Daily spending trends
* Compute costs
* Storage costs
* Network costs
* Service-wise cost breakdown
* Monthly cost comparison
* Cloud resource summary
* Cost distribution charts
* Spending trend visualization

---

### ☁️ Multi-Cloud Support

CloudCost Guard is designed with multi-cloud integration in mind.

Supported cloud providers:

* Amazon Web Services (AWS)
* Microsoft Azure
* Google Cloud Platform (GCP)

The current architecture can be extended to connect with real cloud billing and resource-management APIs.

---

### 📈 Cost Analytics

The analytics module helps users understand how cloud resources contribute to overall spending.

Features include:

* Service-wise cost analysis
* Daily spending analysis
* Monthly spending analysis
* Historical cost analysis
* Cost distribution
* Spending comparisons
* Usage-based cost insights
* Cloud spending trends

---

### 🖥️ Resource Monitoring

CloudCost Guard provides visibility into cloud resources and their utilization.

Resources can include:

* Compute instances
* Storage resources
* Network resources
* Virtual machines
* Cloud services
* Resource utilization
* Idle resources
* Underutilized resources
* Unused resources

---

### 🔔 Smart Alerts

The alert system identifies potential cloud-cost problems.

Examples include:

* High cloud spending
* Budget threshold violations
* Unusual spending patterns
* Sudden cost increases
* Idle resources
* Underutilized resources
* Unused storage
* Potential unnecessary expenses

---

### ♻️ Cost Optimization

CloudCost Guard identifies potential opportunities for reducing cloud expenditure.

Optimization recommendations can include:

* Idle resource detection
* Underutilized compute detection
* Unused storage detection
* Resource right-sizing suggestions
* Non-production resource scheduling
* Resource cleanup recommendations
* Estimated potential savings

---

### 📄 Reports

Users can generate and review different types of cloud cost reports.

Reports can include:

* Cloud cost reports
* Service-wise spending reports
* Resource utilization reports
* Optimization reports
* Cost summary reports
* Historical spending reports

---

### ⚙️ Configuration

Users can configure platform preferences such as:

* Cloud provider
* Budget limits
* Alert thresholds
* Currency
* Region
* Dashboard preferences

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────────┐
                         │      Cloud Providers     │
                         │                          │
                         │     AWS / Azure / GCP    │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │      Flask Backend       │
                         │                          │
                         │   REST API + Services    │
                         └────────────┬─────────────┘
                                      │
                ┌─────────────────────┼─────────────────────┐
                ▼                     ▼                     ▼
        ┌───────────────┐     ┌───────────────┐     ┌────────────────┐
        │ Cost Analysis │     │Resource Usage │     │ Optimization   │
        └───────┬───────┘     └───────┬───────┘     └───────┬────────┘
                │                     │                     │
                └─────────────────────┼─────────────────────┘
                                      ▼
                         ┌──────────────────────────┐
                         │        REST API          │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │        Frontend          │
                         │                          │
                         │ HTML + CSS + JavaScript  │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │    CloudCost Guard       │
                         │       Dashboard          │
                         └──────────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

| Technology        | Purpose                            |
| ----------------- | ---------------------------------- |
| HTML5             | Webpage structure                  |
| CSS3              | Styling and responsive design      |
| JavaScript        | Frontend functionality             |
| Chart.js          | Data visualization                 |
| Responsive Design | Desktop, tablet and mobile support |

---

## Backend

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| Python        | Backend programming            |
| Flask         | REST API framework             |
| Flask-CORS    | Cross-origin API communication |
| Python-dotenv | Environment configuration      |
| REST API      | Frontend-backend communication |

---

## Cloud Integration

The architecture is designed to support:

* AWS
* Microsoft Azure
* Google Cloud Platform

Future integrations can retrieve:

* Billing information
* Resource information
* Usage metrics
* Cost history
* Cloud service information
* Optimization data

---

## Data Layer

The backend architecture can work with:

* Cloud billing data
* Resource data
* Usage metrics
* Cost history
* Alert information
* Optimization recommendations

The current project uses demo data for development and demonstration.

A production database can be integrated later for persistent storage.

---

# 📁 Project Structure

```text
CloudCost-Guard/
│
├── index.html
├── .env
├── .gitignore
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── dashboard.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── dashboard.js
│   │   └── charts.js
│   │
│   └── images/
│
├── pages/
│   ├── analytics/
│   │   └── index.html
│   │
│   ├── resources/
│   │   └── index.html
│   │
│   ├── alerts/
│   │   └── index.html
│   │
│   ├── optimization/
│   │   └── index.html
│   │
│   ├── reports/
│   │   └── index.html
│   │
│   └── settings/
│       └── index.html
│
└── backend/
    │
    ├── app.py
    ├── config.py
    ├── requirements.txt
    │
    ├── routes/
    │   ├── __init__.py
    │   ├── dashboard.py
    │   ├── costs.py
    │   ├── resources.py
    │   ├── alerts.py
    │   └── optimization.py
    │
    ├── services/
    │   ├── __init__.py
    │   ├── cost_service.py
    │   ├── resource_service.py
    │   └── optimization_service.py
    │
    ├── models/
    │   ├── __init__.py
    │   └── database.py
    │
    └── data/
        └── demo_data.json
```

---

# 🔌 Backend API

The Flask backend exposes REST API endpoints that are consumed by the frontend.

## Dashboard API

### Endpoint

```http
GET /api/dashboard
```

Returns an overview of cloud spending and resource statistics.

Example response:

```json
{
    "total_cost": 12450,
    "monthly_cost": 12450,
    "compute_cost": 6200,
    "storage_cost": 2800,
    "network_cost": 1950,
    "potential_savings": 2150,
    "active_resources": 42
}
```

---

## Costs API

### Endpoint

```http
GET /api/costs
```

Returns cloud cost information.

Example:

```json
{
    "costs": [
        {
            "service": "Compute",
            "cost": 6200
        },
        {
            "service": "Storage",
            "cost": 2800
        },
        {
            "service": "Network",
            "cost": 1950
        }
    ]
}
```

---

## Resources API

### Endpoint

```http
GET /api/resources
```

Returns cloud resource information and utilization.

Example:

```json
{
    "resources": [
        {
            "name": "Production Server",
            "type": "Compute",
            "utilization": 78,
            "status": "Active"
        },
        {
            "name": "Development Server",
            "type": "Compute",
            "utilization": 18,
            "status": "Underutilized"
        }
    ]
}
```

---

## Alerts API

### Endpoint

```http
GET /api/alerts
```

Returns detected cloud cost and resource alerts.

Example:

```json
{
    "alerts": [
        {
            "type": "High Spending",
            "severity": "High",
            "message": "Monthly cloud spending exceeded the configured threshold."
        },
        {
            "type": "Idle Resource",
            "severity": "Medium",
            "message": "A compute resource has low utilization."
        }
    ]
}
```

---

## Optimization API

### Endpoint

```http
GET /api/optimization
```

Returns potential optimization opportunities.

Example:

```json
{
    "recommendations": [
        {
            "resource": "Development Server",
            "issue": "Low utilization",
            "recommendation": "Consider right-sizing the instance.",
            "estimated_savings": 320
        },
        {
            "resource": "Unused Storage",
            "issue": "Unused storage volume",
            "recommendation": "Review and remove unused storage.",
            "estimated_savings": 180
        }
    ]
}
```

---

# 🔄 Application Workflow

CloudCost Guard follows the following workflow:

```text
Cloud Data
     │
     ▼
Data Collection
     │
     ▼
Cost & Resource Analysis
     │
     ├───────────────┐
     ▼               ▼
Cost Analysis    Resource Analysis
     │               │
     └───────┬───────┘
             ▼
       Anomaly Detection
             │
             ▼
      Optimization Engine
             │
             ▼
    Recommendations
             │
             ▼
       Smart Alerts
             │
             ▼
        Dashboard
             │
             ▼
      Reports & Insights
```

---

# 💻 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/priyasaravanan19/CloudCost-Guard.git
```

Navigate into the project:

```bash
cd CloudCost-Guard
```

---

# 🐍 Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

### Windows

```bash
python -m venv venv
```

Activate the environment:

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
FLASK_ENV=development
FLASK_DEBUG=True
SECRET_KEY=your-secret-key

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1

AZURE_CLIENT_ID=
AZURE_CLIENT_SECRET=
AZURE_TENANT_ID=

GCP_PROJECT_ID=
GOOGLE_APPLICATION_CREDENTIALS=
```

### Security Note

Never commit real cloud credentials or secrets to GitHub.

Add `.env` to `.gitignore`:

```gitignore
.env
venv/
__pycache__/
*.pyc
```

---

# ▶️ Running the Backend

From the `backend` directory:

```bash
python app.py
```

The Flask server will normally run at:

```text
http://127.0.0.1:5000
```

API examples:

```text
http://127.0.0.1:5000/api/dashboard
```

```text
http://127.0.0.1:5000/api/costs
```

```text
http://127.0.0.1:5000/api/resources
```

```text
http://127.0.0.1:5000/api/alerts
```

```text
http://127.0.0.1:5000/api/optimization
```

---

# 🌐 Running the Frontend

The frontend can be opened using a local development server.

If using VS Code, install the **Live Server** extension and open:

```text
index.html
```

Then select:

```text
Open with Live Server
```

The frontend communicates with the Flask backend through REST API requests.

---

# 🔗 Frontend ↔ Backend Communication

The frontend sends requests to the Flask API.

Example:

```javascript
fetch("http://127.0.0.1:5000/api/dashboard")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("API Error:", error);
    });
```

The returned data can then be displayed in dashboard cards, charts, tables, alerts, and reports.

---

# 📊 Dashboard Modules

The CloudCost Guard dashboard is divided into multiple modules.

## Dashboard

Provides a high-level overview of:

* Total spending
* Monthly spending
* Resource count
* Potential savings
* Cost trends
* Recent alerts

---

## Analytics

Provides detailed cost analysis.

```text
Analytics
│
├── Spending Trends
├── Service Breakdown
├── Monthly Comparison
├── Cost Distribution
└── Historical Analysis
```

---

## Resources

Provides cloud resource monitoring.

```text
Resources
│
├── Compute
├── Storage
├── Network
├── Active Resources
├── Idle Resources
└── Underutilized Resources
```

---

## Alerts

Provides information about potential cost issues.

```text
Alerts
│
├── Budget Alerts
├── Spending Alerts
├── Anomaly Alerts
├── Idle Resource Alerts
└── Utilization Alerts
```

---

## Optimization

Displays cost-saving opportunities.

```text
Optimization
│
├── Idle Resources
├── Right-Sizing
├── Storage Cleanup
├── Scheduling
└── Estimated Savings
```

---

## Reports

Provides summarized cloud cost information.

```text
Reports
│
├── Cost Report
├── Resource Report
├── Optimization Report
└── Monthly Summary
```

---

## Settings

Allows users to configure:

```text
Settings
│
├── Cloud Provider
├── Budget
├── Alert Threshold
├── Currency
├── Region
└── Dashboard Preferences
```

---

# ☁️ Cloud Provider Integration

The platform can be extended to connect with real cloud providers.

## AWS

Possible integrations include:

* AWS Cost Explorer
* AWS CloudWatch
* Amazon EC2
* Amazon S3
* AWS Lambda

---

## Microsoft Azure

Possible integrations include:

* Azure Cost Management
* Azure Monitor
* Azure Virtual Machines
* Azure Storage
* Azure Resource Manager

---

## Google Cloud

Possible integrations include:

* Cloud Billing
* Cloud Monitoring
* Compute Engine
* Cloud Storage
* BigQuery

---

# 🧠 Cost Optimization Logic

CloudCost Guard can analyze resource utilization and spending data to identify potential savings.

Example:

```text
Resource Utilization
        │
        ▼
   Analyze Usage
        │
        ▼
 ┌─────────────────┐
 │ Utilization <30%│
 └────────┬────────┘
          │
          ▼
  Underutilized
          │
          ▼
 Right-Sizing Suggestion
          │
          ▼
 Estimated Savings
```

Example recommendation:

```text
Resource:
Development-Server-01

Current Utilization:
18%

Issue:
Underutilized compute resource

Recommendation:
Consider moving to a smaller instance type.

Estimated Monthly Savings:
$320
```

> Savings shown by the application are estimates based on the available data and should be validated against the actual cloud provider's pricing and resource requirements.

---

# 🚨 Cost Anomaly Detection

The platform can detect unusual spending patterns.

Example:

```text
Normal Daily Cost
       │
       ▼
   $350 / day
       │
       ▼
Sudden Increase
       │
       ▼
   $820 / day
       │
       ▼
Anomaly Detected
       │
       ▼
Smart Alert
```

Possible causes can include:

* Unexpected resource creation
* Increased traffic
* Increased storage usage
* Misconfigured resources
* Unexpected service usage

---

# 💡 Example Dashboard

```text
┌──────────────────────────────────────────────────────────┐
│                    CloudCost Guard                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Total Cost       Monthly Cost      Potential Savings    │
│  $12,450          $12,450           $2,150              │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│              Cloud Spending Trend                        │
│                                                          │
│       ╭────╮                                             │
│  $    │    ╰──╮                                          │
│       │       ╰────╮                                     │
│       │            ╰────╮                                │
│       └──────────────────────────────                    │
│                                                          │
├──────────────────────┬───────────────────────────────────┤
│ Service Costs        │ Resource Status                   │
│                      │                                   │
│ Compute     $6,200   │ Active          32               │
│ Storage     $2,800   │ Underutilized    7               │
│ Network     $1,950   │ Idle             3               │
│ Other       $1,500   │                                   │
├──────────────────────┴───────────────────────────────────┤
│                                                          │
│ Optimization Opportunities                               │
│                                                          │
│  ⚠ Underutilized Server                    Save $320     │
│  ⚠ Unused Storage                         Save $180     │
│  ⚠ Idle Resource                           Save $150     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

# 🔒 Security Considerations

CloudCost Guard should follow secure practices when integrating with real cloud accounts.

Recommended practices:

* Never hard-code cloud credentials
* Store secrets in environment variables
* Use `.env` only for local development
* Add `.env` to `.gitignore`
* Use least-privilege cloud IAM permissions
* Avoid exposing secret keys through frontend JavaScript
* Keep cloud credentials on the backend
* Validate API requests
* Enable HTTPS in production
* Implement authentication and authorization
* Log security-sensitive events appropriately

### Important

Cloud provider credentials should **never be placed inside frontend HTML, CSS, or JavaScript files**.

The frontend should communicate with the Flask backend, while the backend securely communicates with cloud provider APIs.

---

# 🧪 Development

For development, CloudCost Guard can use demo data stored in:

```text
backend/data/demo_data.json
```

This allows the dashboard and API functionality to be developed without requiring an active cloud account.

Example development flow:

```text
Demo JSON Data
      │
      ▼
Flask Service Layer
      │
      ▼
REST API
      │
      ▼
JavaScript Frontend
      │
      ▼
Dashboard
```

---

# 📦 Requirements

Example backend dependencies:

```text
Flask
Flask-CORS
python-dotenv
```

Additional cloud SDKs can be added when real cloud integrations are implemented.

For example:

```text
boto3
azure-identity
azure-mgmt-resource
google-cloud-billing
google-cloud-monitoring
```

These should only be added when the corresponding cloud integrations are actually implemented.

---

# 🧩 API Architecture

```text
                    Flask Application
                           │
                           ▼
                    ┌──────────────┐
                    │  REST APIs   │
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   Dashboard API       Costs API        Resources API
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                    Service Layer
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         Cost Service  Resource Service  Optimization
              │            │            │
              └────────────┼────────────┘
                           ▼
                       Data Layer
```

This separation makes the application easier to maintain and extend.

---

# 📈 Future Enhancements

Future versions of CloudCost Guard can include:

### 🤖 AI-Based Cost Forecasting

Predict future cloud spending using historical cost and usage data.

---

### 🧠 Machine Learning Anomaly Detection

Use machine learning algorithms to automatically detect unusual spending patterns.

---

### ☁️ Real Multi-Cloud Integration

Connect directly to:

* AWS
* Azure
* GCP

and retrieve real billing and resource information.

---

### 🔐 User Authentication

Implement:

* User registration
* Login
* Role-based access
* Organization management

---

### 🗄️ Persistent Database

Add a production database such as:

* MySQL
* PostgreSQL
* MongoDB

for storing:

* Users
* Cloud accounts
* Billing history
* Resources
* Alerts
* Recommendations

---

### 📧 Notification System

Send notifications through:

* Email
* SMS
* Slack
* Microsoft Teams

when important cost alerts occur.

---

### 📊 Advanced Reporting

Generate downloadable:

* PDF reports
* CSV reports
* Excel reports

---

### ⚡ Automated Optimization

With appropriate permissions and safeguards, future versions could support controlled actions such as:

* Scheduling non-production resources
* Stopping idle resources
* Cleaning unused resources
* Applying approved right-sizing changes

Automated actions should require appropriate authorization and safeguards before execution.

---

# 🎯 Project Objectives

CloudCost Guard aims to:

1. Monitor cloud spending from a centralized dashboard.
2. Provide visibility into cloud resource usage.
3. Detect unusual spending patterns.
4. Identify idle and underutilized resources.
5. Provide cost optimization recommendations.
6. Estimate potential savings.
7. Support multi-cloud architecture.
8. Provide actionable cloud cost insights.
9. Reduce unnecessary cloud expenditure.
10. Provide a scalable foundation for cloud FinOps workflows.

---

# 🌍 Use Cases

CloudCost Guard can be useful for:

### Startups

Monitor cloud expenses while controlling infrastructure costs.

### Small Businesses

Identify unnecessary cloud resources and understand monthly spending.

### Development Teams

Track development and testing environments.

### Enterprises

Centralize cost visibility across multiple cloud services.

### DevOps Teams

Monitor resource utilization and identify optimization opportunities.

### FinOps Teams

Analyze cloud expenditure and support cost-management workflows.

---

# 🏆 Why CloudCost Guard?

Cloud infrastructure can become difficult to manage as applications and resources grow.

Without proper visibility, organizations may experience:

```text
Cloud Resources
       │
       ▼
Increasing Usage
       │
       ▼
Increasing Costs
       │
       ▼
Limited Visibility
       │
       ▼
Unexpected Cloud Bills
```

CloudCost Guard provides a centralized workflow:

```text
Monitor
   ↓
Analyze
   ↓
Detect
   ↓
Alert
   ↓
Optimize
   ↓
Track Savings
```

---

# 📌 Project Status

```text
Project: CloudCost Guard

Type: Full-Stack Cloud Cost Monitoring Platform

Frontend: HTML + CSS + JavaScript

Backend: Python + Flask

API: REST API

Charts: Chart.js

Cloud: AWS / Azure / GCP Integration Ready

Database: Extensible Data Layer

Current Data: Demo Data

Status: Development
```

---

# 🔮 Vision

The long-term vision of CloudCost Guard is to become an intelligent **cloud FinOps and cost-optimization platform** that helps organizations understand where their cloud money is being spent, detect potential waste early, and make informed infrastructure decisions.

```text
Cloud Data
     ↓
Cost Visibility
     ↓
Usage Analysis
     ↓
Anomaly Detection
     ↓
Optimization Recommendations
     ↓
Potential Savings
     ↓
Better Cloud Cost Management
```

---

# 👨‍💻 Author

**CloudCost Guard**

Full-Stack Cloud Cost Monitoring & Optimization Platform

---

# 📄 License

This project is intended for educational, development, and demonstration purposes.

A suitable open-source license such as **MIT License** can be added when the project is ready for public distribution.

---

# ⭐ Contributing

Contributions are welcome.

To contribute:

```bash
git clone https://priyasaravanan19/CloudCost-Guard.git
```

Create a new branch:

```bash
git checkout -b feature/new-feature
```

Make your changes and commit:

```bash
git add .
git commit -m "Add new feature"
```

Push the branch:

```bash
git push origin feature/new-feature
```

Then create a Pull Request.

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**CloudCost Guard — Monitor. Analyze. Optimize. Save. ☁️**
