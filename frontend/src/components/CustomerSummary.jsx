import { User } from "lucide-react";

function CustomerSummary({ crm }) {
  return (
    <div className="card">
      <div className="card-title">
        <div className="card-title-icon feature-icon-indigo">
          <User size={16} />
        </div>
        Customer Summary
      </div>

      <div className="customer-grid">
        <div>
          <div className="customer-field-label">Customer</div>
          <div className="customer-field-value">{crm.customer_name}</div>
        </div>
        <div>
          <div className="customer-field-label">Tier</div>
          <span className="tier-badge">{crm.tier}</span>
        </div>
        <div>
          <div className="customer-field-label">Account Status</div>
          <span className="status-active">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--green-500)",
                display: "inline-block",
              }}
            />
            {crm.account_status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CustomerSummary;