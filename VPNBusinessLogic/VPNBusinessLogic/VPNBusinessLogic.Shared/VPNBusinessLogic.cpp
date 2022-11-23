#include "VPNBusinessLogic.h"
#include <sstream>


#define CPPHTTPLIB_OPENSSL_SUPPORT
#include "path/to/httplib.h"



#define PLATFORM_ANDROID 0
#define PLATFORM_IOS 1

char * VPNBusinessLogic::getTemplateInfo()
{
#if PLATFORM == PLATFORM_IOS
	static char info[] = "Platform for iOS";
#elif PLATFORM == PLATFORM_ANDROID
	static char info[] = "Platform for Android";
#else
	static char info[] = "Undefined platform";
#endif

	return info;
}

VPNBusinessLogic::VPNBusinessLogic()
{

	/*std::ostringstream os;
	os << curlpp::options::Url(std::string("https://apps-ivacy.s3.amazonaws.com/premium/ios/6.2.0/data.json"));

		string asAskedInQuestion = os.str();*/

	//auto response = cpr::Get(cpr::Url( "https://apps-ivacy.s3.amazonaws.com/premium/ios/6.2.0/data.json" ));
	//std::cout << response.text << std::endl;

	httplib::Client; cli("https://apps-ivacy.s3.amazonaws.com/premium/ios/6.2.0/data.json");

	auto res = cli.Get("/hi");
	res->status;
	res->body;


	// HTTPS
}

VPNBusinessLogic::~VPNBusinessLogic()
{
}
