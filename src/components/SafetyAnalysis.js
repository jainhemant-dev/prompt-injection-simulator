import { ShieldCheckIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

export default function SafetyAnalysis({ report }) {
    if (!report) return null;

    const getRiskColor = (riskLevel) => {
        switch (riskLevel.toLowerCase()) {
            case 'low':
                return 'text-success';
            case 'medium':
                return 'text-warning';
            case 'high':
                return 'text-danger';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Safety Analysis</h2>
                <div className="flex items-center">
                    {report.isSafe ? (
                        <ShieldCheckIcon className="h-6 w-6 text-success" />
                    ) : (
                        <ShieldExclamationIcon className="h-6 w-6 text-danger" />
                    )}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">Risk Level:</span>
                    <span className={`font-semibold ${getRiskColor(report.riskLevel)}`}>
                        {report.riskLevel.toUpperCase()}
                    </span>
                </div>

                {report.detectedPatterns.length > 0 && (
                    <div className="space-y-2">
                        <h3 className="font-medium">Detected Patterns:</h3>
                        <ul className="space-y-2">
                            {report.detectedPatterns.map((pattern, index) => (
                                <li
                                    key={index}
                                    className="p-2 bg-danger/10 text-danger rounded-md text-sm"
                                >
                                    <span className="font-medium">{pattern.category}:</span>{' '}
                                    "{pattern.pattern}"
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {report.recommendations.length > 0 && (
                    <div className="space-y-2">
                        <h3 className="font-medium">Recommendations:</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            {report.recommendations.map((recommendation, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{recommendation}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="text-xs text-gray-500">
                    Analysis timestamp: {new Date(report.timestamp).toLocaleString()}
                </div>
            </div>
        </div>
    );
}