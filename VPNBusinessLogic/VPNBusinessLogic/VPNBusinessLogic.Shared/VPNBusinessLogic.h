#pragma once


#include <curlpp/cURLpp.hpp>
#include <curlpp/Options.hpp>

class VPNBusinessLogic {
public:
    static char * getTemplateInfo();
    VPNBusinessLogic();
    ~VPNBusinessLogic();
};
