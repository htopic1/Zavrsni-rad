var prviAngular=angular
                .module('modul',[])
                .controller('kontinenti',function($scope)
                {
                    $scope.evropa=function()
                    {
                        $scope.myStyleEvropa=
                        {
                            "border-top":"250px solid purple",
                            "transform":"rotate(90deg)",
                            "filter":"opacity(1)",
                            "left":"-45%",
                            "transition":"1s"
                        }

                        $scope.myStyleEvropaIme=
                        {
                            "transform":"rotate(-90deg)",
                            "transition":"1s"
                        }

                        $scope.prekoEvropeAzija=
                        {
                            "display":"none"
                        }

                        $scope.prekoEvropeAfrika=
                        {
                            "display":"none"
                        }

                        $scope.prekoEvropeAmerika=
                        {
                            "display":"none"
                        }
                    }
                })